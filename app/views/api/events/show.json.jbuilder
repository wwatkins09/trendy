json.event do
  json.id @event.id
  json.category @event.category
end

json.user do
  json.id @user.id
  json.email @user.email
  json.eventIds @user.event_ids
end
