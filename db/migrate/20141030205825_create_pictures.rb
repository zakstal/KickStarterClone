class CreatePictures < ActiveRecord::Migration
  def change
    create_table :pictures do |t|
      t.references :image, polymorphic: true
      t.timestamps
    end
  end
end
