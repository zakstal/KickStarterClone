class UserBio < ActiveRecord::Base
  belongs_to :users, class_name: "Users", foreign_key: :user_id, primary_key: :id
end
