json.category do
  json.id @category.id
  json.name @category.name
  json.userId @category.user_id
  json.eventIds @category.event_ids
end

json.user do
  json.id @user.id
  json.email @user.email
  json.categoryIds @user.category_ids
end
