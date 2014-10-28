class CreateUserBios < ActiveRecord::Migration
  def change
    create_table :user_bio do |t|
      t.string :username
      t.string :bio

      t.timestamps
    end
    add_index :user_bio, :username, unique: true
  end
end
