export const fetchEventsByCategoryId = (categoryId) => {
  return $.ajax({
    method: 'GET',
    url: 'api/events',
    data: {category_id: categoryId}
  });
};

export const createEvent = (event) => {
  return $.ajax({
    method: 'POST',
    url: 'api/events',
    data: {event}
  });
};
