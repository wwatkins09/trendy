class Event < ApplicationRecord
  validates :category, :user_id, :date, presence: true
  validates :quantity, :quality, :duration, numericality: { greater_than_or_equal_to: 0 }
  validates_uniqueness_of :user_id, scope: [:date, :category]
  belongs_to :user

end
