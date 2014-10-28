class AddBioEmailPictureColumn < ActiveRecord::Migration
  def change
    add_column :users, :email, :string
    add_column :users, :bio, :text
  end
end
