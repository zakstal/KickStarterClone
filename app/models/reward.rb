class Reward < ActiveRecord::Base
  belongs_to  :project, class_name: "Project"
  belongs_to  :backer,  class_name: "User", forign_key: :backer_id
  has_one     :maker,   through: :project, source: :user

end
