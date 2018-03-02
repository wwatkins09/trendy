import * as APICategoryUtil from '../util/api_category_util';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';

export const fetchCategoriesByUserId = (userId) => {
  return (dispatch) => {
    return APICategoryUtil.fetchCategoriesByUserId(userId).then((categories) => {
      return dispatch(receiveCategories(categories));
    });
  };
};

export const createCategory = (category) => {
  return (dispatch) => {
    return APICategoryUtil.createCategory(category).then((category) => {
      return dispatch(receiveCategory(category));
    });
  };
};

export const receiveCategories = (categories) => {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  };
};

export const receiveCategory = (category) => {
  return {
    type: RECEIVE_CATEGORY,
    category
  }
}
