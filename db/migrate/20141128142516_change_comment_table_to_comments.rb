class ChangeCommentTableToComments < ActiveRecord::Migration
  def change
    rename_table :comment, :comments
  end
end
