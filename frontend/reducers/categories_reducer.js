import {RECEIVE_CATEGORIES} from '../actions/category_actions';

const categoriesReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return Object.assign({}, oldState, action.categories)
    default:
      return oldState;
  }
};

export default categoriesReducer;
