class AddFundraisingFundingGoalColumns < ActiveRecord::Migration
  def change
    add_column :projects, :duration, :string
    add_column :projects, :fundinggoal, :string
    change_column_null :projects, :duration, false
    change_column_null :projects, :fundinggoal, false
  end
end
