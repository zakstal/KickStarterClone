class Project < ActiveRecord::Base

  validates :title, :description, :user_id, :catagorie_id, :duration, :fundinggoal, presence: true
  validates :title, uniqueness: true

  belongs_to :user, class_name: "Users", foreign_key: :user_id
  belongs_to :catagorie
end
