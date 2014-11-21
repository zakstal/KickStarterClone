class ChangeRewardsDescriptionToText < ActiveRecord::Migration
  def change
    change_column :rewards, :description, :text
  end
end
