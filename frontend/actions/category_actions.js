import * as APICategoryUtil from '../util/api_category_util';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';

export const fetchCategoryById = (categoryId) => {
  return (dispatch) => {
    return APICategoryUtil.fetchCategoryById(categoryId).then((category) => {
      return dispatch(receiveCategory(category));
    });
  };
};

export const fetchCategoriesByUserId = (userId) => {
  return (dispatch) => {
    return APICategoryUtil.fetchCategoriesByUserId(userId).then((categories) => {
      return dispatch(receiveCategories(categories));
    });
  };
};

export const createCategory = (category) => {
  return (dispatch) => {
    return APICategoryUtil.createCategory(category).then((payload) => {
      return dispatch(receiveCategory(payload));
    });
  };
};

export const receiveCategories = (categories) => {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  };
};

export const receiveCategory = (payload) => {
  return {
    type: RECEIVE_CATEGORY,
    payload
  }
}
