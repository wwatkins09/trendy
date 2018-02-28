class DropFreqTrends < ActiveRecord::Migration[5.1]
  def change
    drop_table :freq_trends
  end
end
