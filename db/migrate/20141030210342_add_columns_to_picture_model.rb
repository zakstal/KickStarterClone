class AddColumnsToPictureModel < ActiveRecord::Migration
  def change
    add_column :pictures, :filepicker_url, :string
  end
end
