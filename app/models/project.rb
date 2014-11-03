class Project < ActiveRecord::Base

  validates   :title,     :description, :catagory_id, :duration, :fundinggoal, presence: true
  validates   :title,     uniqueness: true

  has_many    :rewards,         class_name: "Reward"
  has_one     :story,           class_name: "Story",      foreign_key: :project_id

  has_many    :backers,         through: :rewards,        source: :backer
  has_many    :claimed_rewards, through: :rewards,        source: :user

  belongs_to  :user,            class_name: "Users",      foreign_key: :user_id,      primary_key: :id
  belongs_to  :catagory,        class_name: "Catagorie",  foreign_key: :catagory_id,  primary_key: :catagory


  def amt_pledged
    # claimed_rewards.inject(:+)
  end

  def how_many_backers
    backers.count
  end

  def username
    return if user.user_bio.nil?
    user.user_bio.pluck(:username)
  end

end
