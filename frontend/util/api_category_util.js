export const fetchCategoryById = (categoryId) => {
  return $.ajax({
    method: 'GET',
    url: `api/categories/${categoryId}`,
    data: {category_id: categoryId}
  });
};

export const fetchCategoriesByUserId = (userId) => {
  return $.ajax({
    method: 'GET',
    url: 'api/categories',
    data: {user_id: userId}
  });
};

export const createCategory = (category) => {
  return $.ajax({
    method: 'POST',
    url: 'api/categories',
    data: {category}
  });
};
