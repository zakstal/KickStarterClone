class Users < ActiveRecord::Base
  attr_reader :password
  validates :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, length: { minimum: 6, allow_nil: true }

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

end
