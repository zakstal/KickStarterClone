class UserBio < ActiveRecord::Base
  belongs_to :users, class_name: "UserBio", foreign_key: :user_id, primary_key: :id
end
