class AddDates < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :date, :integer, null: false
  end
end
