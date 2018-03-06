export const fetchEventsByCategoryId = (categoryId) => {
  return $.ajax({
    method: 'GET',
    url: 'api/events',
    data: {
      category_id: categoryId
    }
  });
};

export const fetchFiveEventsByCategoryId = (categoryId) => {
  return $.ajax({
    method: 'GET',
    url: 'api/events',
    data: {
      category_id: categoryId,
      five_day: true
    }
  })
}

export const createEvent = (event) => {
  return $.ajax({
    method: 'POST',
    url: 'api/events',
    data: { event: {
      category_id: event.categoryId,
      date: event.date,
      quantity: event.quantity,
      quality: event.quality,
      duration: event.duration
      }
    }
  });
};

export const deleteEvent = (eventId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/events/${eventId}`,
    data: {event_id: eventId}
  })
}
