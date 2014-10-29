class ChangeNullOnProjectsAddIndex < ActiveRecord::Migration
  def change
    remove_index :projects, :user_id
    add_index :projects, :user_id
  end
end
