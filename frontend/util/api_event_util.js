export const fetchEventsByUserId = (userId) => {
  return $.ajax({
    method: 'GET',
    url: 'api/events',
    data: {user_id: userId}
  })
}
