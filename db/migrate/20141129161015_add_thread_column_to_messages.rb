class AddThreadColumnToMessages < ActiveRecord::Migration
  def change
    add_column :messages, :thread, :integer, defalut: true
  end
end
