class ChangeRewardsEstDelivToString < ActiveRecord::Migration
  def change
    change_column :rewards, :est_delivery, :string
  end
end
