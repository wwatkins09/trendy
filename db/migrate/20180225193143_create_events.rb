class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :type, null: false
      t.integer :user_id, null: false
      t.integer :duration
      t.integer :quality
      t.integer :quantity

      t.timestamps
    end
    add_index :events, :user_id
  end
end
