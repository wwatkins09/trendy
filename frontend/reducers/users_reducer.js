import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_EVENT} from '../actions/event_actions';

const usersReducer = (oldState = {}, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, oldState, {[action.user.id]: action.user});
    case RECEIVE_EVENT:
      return Object.assign({}, oldState, {[action.payload.user.id]: action.payload.user})
    default:
      return oldState;
  }
}

export default usersReducer;
