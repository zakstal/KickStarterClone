class Project < ActiveRecord::Base

  validates   :title,     :description, :catagory_id, :duration, :fundinggoal, presence: true
  validates   :title,     uniqueness: true
  has_many    :rewards,   class_name: "Reward"
  has_many    :backers,   through: :rewards, source: :backer
  has_one     :story,     class_name: "Story", foreign_key: :project_id
  belongs_to  :user,      class_name: "Users", foreign_key: :user_id, primary_key: :id
  belongs_to  :catagorie
  # has_one :userbio, through: :user, source: :user_bio
end
