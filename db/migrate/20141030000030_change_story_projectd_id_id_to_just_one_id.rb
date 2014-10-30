class ChangeStoryProjectdIdIdToJustOneId < ActiveRecord::Migration
  def change
    rename_column :stories, :project_id_id, :project_id
  end
end
