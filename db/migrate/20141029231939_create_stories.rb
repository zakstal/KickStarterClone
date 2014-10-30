class CreateStories < ActiveRecord::Migration
  def change
    create_table :stories do |t|
      t.string :story, null: false
      t.string :challenges, null: false
      t.references :project_id, index: true

      t.timestamps
    end
    add_index :stroies, :project_id
  end
end
