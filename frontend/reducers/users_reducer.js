import {RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_CATEGORY} from '../actions/category_actions';

const usersReducer = (oldState = {}, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, oldState, {[action.user.id]: action.user});
    case RECEIVE_CATEGORY:
      return Object.assign({}, oldState, {[action.payload.user.id]: action.payload.user});
    case REMOVE_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
}

export default usersReducer;
