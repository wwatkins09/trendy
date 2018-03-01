class MakeEventsUnique < ActiveRecord::Migration[5.1]
  def change
    add_index(:events, [:user_id, :category, :date], unique: true)
  end
end
