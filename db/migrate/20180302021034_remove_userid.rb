class RemoveUserid < ActiveRecord::Migration[5.1]
  def change
    remove_column :events, :user_id
  end
end
