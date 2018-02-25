class Event < ApplicationRecord
  validates :category, :user_id, presence: true
  belongs_to :user

end
