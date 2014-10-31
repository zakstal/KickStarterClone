class Reward < ActiveRecord::Base
  belongs_to  :project, class_name: "Project"
  belongs_to  :backer,  class_name: "Users", foreign_key: :backer_id, primary_key: :id
  has_one     :maker,   through: :project, source: :user
  has_many    :duplicates, class_name: "Reward", foreign_key: :id, primary_key: :id
  has_many    :claimed_rewards, class_name: "ClaimedRewards"
  #validate quantity left
  def times_backed
    duplicates.count
  end
end
