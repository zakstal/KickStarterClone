class ChangeStoriesStoryAndChalToText < ActiveRecord::Migration
  def change
    change_column :stories, :story, :text
    change_column :stories, :challenges, :text
  end
end
