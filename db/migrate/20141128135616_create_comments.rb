class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :user_id
      t.integer :project_id
      t.text :comment

      t.timestamps
    end
    add_index :comments, :project_id
  end
end
