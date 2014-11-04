class RemoveUniqOnUserBioUsernameIndex < ActiveRecord::Migration
  def change
    remove_index :user_bios, :username
  end
end
