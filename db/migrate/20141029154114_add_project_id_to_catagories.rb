class AddProjectIdToCatagories < ActiveRecord::Migration
  def change
    add_column :catagories, :project_id, :string
    change_column_null :catagories, :project_id, false
  end
end
