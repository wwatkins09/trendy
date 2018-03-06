import {RECEIVE_EVENTS, RECEIVE_EVENT, REMOVE_EVENT} from '../actions/event_actions';

const eventsReducer = (oldState = {}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_EVENTS:
      return Object.assign({}, oldState, action.events);
    case RECEIVE_EVENT:
      return Object.assign({}, oldState, {[action.payload.event.id]: action.payload.event});
    case REMOVE_EVENT:
      newState = Object.assign({}, oldState);
      delete newState[action.event.id];
      return newState;
    default:
      return oldState;
  }
};

export default eventsReducer;
