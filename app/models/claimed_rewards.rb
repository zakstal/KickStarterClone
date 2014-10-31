class ClaimedRewards < ActiveRecord::Base
  belongs_to :user
  belongs_to :rewards, class_name: "Reward"
end
