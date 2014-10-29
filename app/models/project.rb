class Project < ActiveRecord::Base

  validates :title, :description, :catagory_id, :duration, :fundinggoal, presence: true
  validates :title, uniqueness: true


  belongs_to :user, class_name: "Users", foreign_key: :user_id, primary_key: :id


  belongs_to :catagorie
  # has_one :userbio, through: :user, source: :user_bio
end
