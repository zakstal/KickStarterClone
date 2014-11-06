class ChangeImageTable < ActiveRecord::Migration
  def up
    drop_table :pictures
    create_table :pictures do |t|
      t.references :image, polymorphic: true
      t.attachment :pic
      t.timestamps
    end
  end

  def down
    drop_table :pictures

    create_table :pictures do |t|
      t.references :image, polymorphic: true
      t.timestamps
    end
  end
end
