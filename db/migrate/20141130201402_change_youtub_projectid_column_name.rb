class ChangeYoutubProjectidColumnName < ActiveRecord::Migration
  def change
    rename_column :youtube_codes, :project_id_id, :project_id
  end
end
