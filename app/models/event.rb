class Event < ApplicationRecord
  validates :type, :user_id, presence: true


end
