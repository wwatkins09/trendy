import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import eventsReducer from './events_reducer';

export default combineReducers({
  users: usersReducer,
  session: sessionReducer,
  errors: errorsReducer,
  events: eventsReducer
});
