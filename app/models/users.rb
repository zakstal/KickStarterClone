class Users < ActiveRecord::Base
  attr_reader :password
  validates :email, presence: true, uniqueness: true, if: :editing_email
  validates :session_token, presence: true, uniqueness: true
  validates :password_digest, length: { minimum: 6, allow_nil: true }

  has_many  :rewards,          through: :claimed_rewards, source: :reward
  has_many  :projects,            class_name: "Project",         foreign_key: :user_id,    primary_key: :id
  has_one   :user_bio,            class_name: "UserBio",         foreign_key: :user_id,    primary_key: :id
  has_many  :claimed_rewards,     class_name: "ClaimedRewards",  foreign_key: :user_id
  has_many  :comments,            class_name: "Comment",         foreign_key: :user_id
  has_many  :received_messages,   class_name: "Message",        foreign_key: :to_user_id,   primary_key: :id
  has_many  :sent_messages,       class_name: "Message",        foreign_key: :from_user_id, primary_key: :id

  has_many  :backed_projects,  through: :rewards,      source: :project
  has_many  :pictures, as: :image



   after_initialize :ensure_session

  def self.find_by_credentials(email, password)
    user = Users.find_by_email(email)
    user.try(:is_password?, password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session
    self.session_token ||= SecureRandom::urlsafe_base64(16)
  end

  def editing_email
    true unless Users.find_by_email(:email)
  end

  def name
    user_bio.username
  end

  def number_of_backed_projects
    backed_projects.count
  end

  def number_of_projects
    projects.count
  end

end
