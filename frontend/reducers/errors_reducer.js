import {RECEIVE_SESSION_ERRORS, CLEAR_ERRORS} from '../actions/session_actions';
import {RECEIVE_USER_ERRORS} from '../actions/user_actions';

const errorsReducer = (oldState = [], action) => {
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_USER_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return oldState;
  }
}

export default errorsReducer;
