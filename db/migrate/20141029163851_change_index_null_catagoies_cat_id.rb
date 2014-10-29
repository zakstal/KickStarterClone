class ChangeIndexNullCatagoiesCatId < ActiveRecord::Migration
  def change
    remove_index :projects, :catagory_id
    add_index :projects, :catagory_id
  end
end
