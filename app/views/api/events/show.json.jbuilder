json.event do
  json.id @event.id
  json.categoryId @event.category_id
  json.quantity @event.quantity
  json.quality @event.quality
  json.duration @event.duration
  json.date @event.date
end

json.category do
  json.id @category.id
  json.name @category.name
  json.userId @category.user_id
  json.eventIds @category.event_ids
end
