class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.string :catagorie_id, null: false
      t.string :user_id, null: false

      t.timestamps
    end
    add_index :projects, :title, unique: true
    add_index :projects, :catagorie_id, unique: true
    add_index :projects, :user_id, unique: true
  end
end
