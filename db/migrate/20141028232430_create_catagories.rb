class CreateCatagories < ActiveRecord::Migration
  def change
    create_table :catagories do |t|
      t.string :catagory, null: false

      t.timestamps
    end
  end
end
