import {RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER} from '../actions/session_actions';

const _nullUser = {
  currentUserId: null
};

const sessionReducer = (oldState = _nullUser, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return {currentUserId: action.user.id};
    case REMOVE_CURRENT_USER:
      return _nullUser;
    default:
      return oldState;
  }
};

export default sessionReducer;
