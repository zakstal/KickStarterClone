class RemoveUserIdFromReward < ActiveRecord::Migration
  def change
    remove_column :rewards, :backer_id
  end
end
