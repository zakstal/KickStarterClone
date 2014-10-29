class CreateRewards < ActiveRecord::Migration
  def change
    create_table :rewards do |t|
      t.integer :backer_id, null: false
      t.integer :project_id, null: false
      t.integer :pledge_amt, null: false
      t.string :description, null: false
      t.date :est_delivery, null: false
      t.integer :qty, null: false

      t.timestamps
    end

    add_index :rewards, :backer_id
    add_index :rewards, :project_id
    add_index :rewards, :pledge_amt
  end
end
