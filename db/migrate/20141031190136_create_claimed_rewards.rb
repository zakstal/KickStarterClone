class CreateClaimedRewards < ActiveRecord::Migration
  def change
    create_table :claimed_rewards do |t|
      t.references :reward_id, null: false
      t.references :user_is, null: false
      t.timestamps
    end
  end
end
