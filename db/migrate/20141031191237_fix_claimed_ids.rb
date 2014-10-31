class FixClaimedIds < ActiveRecord::Migration
  def change
    rename_column :claimed_rewards, :reward_id_id, :reward_id
    rename_column :claimed_rewards, :user_is_id, :user_id
  end
end
