class Project < ActiveRecord::Base

  validates   :title,     :description, :catagory_id, :duration, :fundinggoal, presence: true
  validates   :title,     uniqueness: true

  has_many    :rewards,         class_name: "Reward"
  has_one     :story,           class_name: "Story",      foreign_key: :project_id

  has_many    :backers,         through: :rewards,        source: :backer
  has_many    :claimed_rewards, through: :backers,        source: :rewards

  belongs_to  :user,            class_name: "Users",      foreign_key: :user_id,      primary_key: :id
  belongs_to  :catagory,        class_name: "Catagorie",  foreign_key: :catagory_id,  primary_key: :catagory

  def amt_pledged
    claimed_rewards.pluck(:pledge_amt).inject(:+)
  end

  def how_many_backers
    backers.count
  end

end
