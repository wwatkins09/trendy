import * as APICategoryUtil from '../util/api_category_util';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

export const fetchCategoriesByUserId = (userId) => {
  return (dispatch) => {
    return APICategoryUtil.fetchCategoriesByUserId(userId).then((categories) => {
      return dispatch(receiveCategories(categories));
    });
  };
};

export const receiveCategories = (categories) => {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  }
}
