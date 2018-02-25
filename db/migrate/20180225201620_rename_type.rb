class RenameType < ActiveRecord::Migration[5.1]
  def change
    remove_column :events, :type, :string
    add_column :events, :category, :string
  end
end
