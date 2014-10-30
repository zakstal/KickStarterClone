class AddColumsPorjectsActiveFunded < ActiveRecord::Migration
  def change
    add_column :projects, :active, :boolean, default: true
    add_column :projects, :funded, :boolean, default: false
  end
end
