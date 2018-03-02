json.event do
  json.id @event.id
  json.categoryId @event.category_id
  json.quantity @event.quantity
  json.quality @event.quality
  json.duration @event.duration
  json.date @event.date
end

json.user do
  json.id @user.id
  json.email @user.email
  json.categoryIds @user.category_ids
end
