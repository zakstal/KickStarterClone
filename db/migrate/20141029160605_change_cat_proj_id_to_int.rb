class ChangeCatProjIdToInt < ActiveRecord::Migration
  def change
    change_column :catagories, :project_id, 'integer USING CAST(project_id AS integer)'
  end
end
