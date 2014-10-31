class ClaimedRewards < ActiveRecord::Base
  belongs_to :user
  belongs_to :rewards, class_name: "Reward", foreign_key: :reward_id
end
