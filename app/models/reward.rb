class Reward < ActiveRecord::Base
  belongs_to :project, class_name: "Project"
  has_one :maker, through: :project, source: :user
end
