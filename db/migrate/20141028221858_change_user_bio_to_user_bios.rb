class ChangeUserBioToUserBios < ActiveRecord::Migration
  def change
    rename_table :user_bio, :user_bios
  end
end
