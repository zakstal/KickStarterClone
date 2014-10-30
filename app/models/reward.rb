class Reward < ActiveRecord::Base
  belongs_to  :project, class_name: "Project"
  belongs_to  :backer,  class_name: "Users", foreign_key: :backer_id, primary_key: :id
  has_one     :maker,   through: :project, source: :user

end
