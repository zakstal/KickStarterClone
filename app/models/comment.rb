class Comment < ActiveRecord::Base
  belongs_to :project
  belongs_to :user, class_name: "Users"
end
