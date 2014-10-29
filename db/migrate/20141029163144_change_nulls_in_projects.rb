class ChangeNullsInProjects < ActiveRecord::Migration
  def change
    change_column_null :projects, :description, true
    change_column_null :projects, :user_id, true
    change_column_null :projects, :duration, true
    change_column_null :projects, :fundinggoal, true
  end
end
