class CreateCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :categories do |t|
      t.string :name, null: false
      t.integer :user_id, null: false
    end
    add_index :categories, :user_id
  end
end
