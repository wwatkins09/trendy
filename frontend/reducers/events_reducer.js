import merge from 'lodash/merge';
import {RECEIVE_EVENTS, RECEIVE_EVENT, REMOVE_EVENT} from '../actions/event_actions';
import {REMOVE_CURRENT_USER} from '../actions/session_actions';

const eventsReducer = (oldState = {}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_EVENTS:
      return Object.assign({}, oldState, action.events);
    case RECEIVE_EVENT:
      return Object.assign({}, oldState, {[action.payload.event.id]: action.payload.event});
    case REMOVE_EVENT:
      newState = merge({}, oldState);
      delete newState[action.payload.event.id];
      return newState;
    case REMOVE_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};

export default eventsReducer;
