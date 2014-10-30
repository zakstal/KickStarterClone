class RemoveUserFilePickerAddUserBioFilePicker < ActiveRecord::Migration
  def change
    remove_column :users, :filepicker_url
    add_column :user_bios, :filepicker_url, :string
  end
end
