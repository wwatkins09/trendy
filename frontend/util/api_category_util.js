export const fetchCategoriesByUserId = (userId) => {
  return $.ajax({
    method: 'GET',
    url: 'api/categories',
    data: {user_id: userId}
  });
};
