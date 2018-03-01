json.event do
  json.id @event.id
  json.category @event.category
  json.quantity @event.quantity
  json.quality @event.quality
  json.duration @event.duration
  json.date @event.date
end

json.user do
  json.id @user.id
  json.email @user.email
  json.eventIds @user.event_ids
  json.categories Event.where({user_id: @user.id}).map(&:category).uniq
end
