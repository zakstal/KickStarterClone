class ChangeColumnName < ActiveRecord::Migration
  def change
    rename_column :projects, :catagorie_id, :catagory_id
  end
end
