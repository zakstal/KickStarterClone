class ChangeRewarBackerIdToTrue < ActiveRecord::Migration
  def change
    change_column_null :rewards, :backer_id, true
  end
end
