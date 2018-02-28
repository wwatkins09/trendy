export const fetchEventsByUserId = (userId) => {
  return $.ajax({
    method: 'GET',
    url: 'api/events',
    data: {user_id: userId}
  });
};

export const createEvent = (event) => {
  return $.ajax({
    method: 'POST',
    url: 'api/events',
    data: {
      event: {
        category: event.category,
        user_id: event.userId,
        quantity: event.quantity,
        quality: event.quality,
        duration: event.duration
      }
    }
  });
};
