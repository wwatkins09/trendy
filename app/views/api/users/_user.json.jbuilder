json.id user.id
json.email user.email
json.eventIds user.event_ids
json.categories Event.where({user_id: user.id}).map(&:category).uniq
