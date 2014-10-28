class ChangeUserBioTableName < ActiveRecord::Migration
  def change
    rename_table :user_bio, :userbio
  end
end
