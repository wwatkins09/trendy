class Event < ApplicationRecord
  validates :category_id, :date, presence: true
  validates :quantity, :quality, :duration, numericality: { greater_than_or_equal_to: 0 }
  validates :date, numericality: { less_than_or_equal_to: Date.today.to_time.to_i }
  validates :quality, numericality: { less_than_or_equal_to: 10, greater_than_or_equal_to: 1}
  validates_uniqueness_of :date, scope: [:category_id]

  belongs_to :category

end
