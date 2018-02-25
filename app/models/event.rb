class Event < ApplicationRecord
  validates :type, :user_id, presence: true
  belongs_to :user

end
