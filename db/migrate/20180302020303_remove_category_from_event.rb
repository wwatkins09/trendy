class RemoveCategoryFromEvent < ActiveRecord::Migration[5.1]
  def change
    remove_column :events, :category
    add_column :events, :category_id, :integer, null: false
  end
end
