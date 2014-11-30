class CreateYoutubeCodes < ActiveRecord::Migration
  def change
    create_table :youtube_codes do |t|
      t.references :project_id, index: true
      t.string :vcode

      t.timestamps
    end
  end
end
