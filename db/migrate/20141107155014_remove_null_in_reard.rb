class RemoveNullInReard < ActiveRecord::Migration
  def change
    change_column_null :rewards, :qty, true
  end
end
