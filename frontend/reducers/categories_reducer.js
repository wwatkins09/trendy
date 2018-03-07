import merge from 'lodash/merge';
import {RECEIVE_CATEGORIES, RECEIVE_CATEGORY} from '../actions/category_actions';
import {RECEIVE_EVENT, REMOVE_EVENT} from '../actions/event_actions';
import {REMOVE_CURRENT_USER} from '../actions/session_actions';

const categoriesReducer = (oldState = {}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return Object.assign({}, oldState, action.categories);
    case RECEIVE_CATEGORY:
      return Object.assign({}, oldState, {[action.payload.category.id]: action.payload.category});
    case RECEIVE_EVENT:
      newState = Object.assign({}, oldState, {[action.payload.category.id]: action.payload.category});
      return newState;
    case REMOVE_EVENT:
      newState = merge({}, oldState);
      newState[action.payload.category.id].eventIds = newState[action.payload.category.id].eventIds.filter((eventId) => eventId !== action.payload.event.id);
      return newState;
    case REMOVE_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};

export default categoriesReducer;
