class AddUseridToUserBio < ActiveRecord::Migration
  def change
    add_column :user_bio, :user_id, :string
  end
end
