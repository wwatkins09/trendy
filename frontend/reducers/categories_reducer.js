import {RECEIVE_CATEGORIES, RECEIVE_CATEGORY} from '../actions/category_actions';

const categoriesReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return Object.assign({}, oldState, action.categories);
    case RECEIVE_CATEGORY:
      return Object.assign({}, oldState, {[action.payload.category.id]: action.payload.category})
    default:
      return oldState;
  }
};

export default categoriesReducer;
