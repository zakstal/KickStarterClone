class ClaimedRewards < ActiveRecord::Base
  belongs_to :user,   class_name: "Users", foreign_key: :user_id
  belongs_to :reward, class_name: "Reward", foreign_key: :reward_id
end
