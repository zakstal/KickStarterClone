class ChangeNullCatagoriesCatagory < ActiveRecord::Migration
  def change
    change_column_null :catagories, :catagory, true
  end
end
