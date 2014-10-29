class ChangeNullPorjCatId < ActiveRecord::Migration
  def change
    change_column_null :projects, :catagory_id, true
  end
end
