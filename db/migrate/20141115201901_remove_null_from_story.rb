class RemoveNullFromStory < ActiveRecord::Migration
  def change
    change_column_null :stories, :story, true
    change_column_null :stories, :challenges, true
  end
end
