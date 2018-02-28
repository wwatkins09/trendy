import {RECEIVE_EVENTS, RECEIVE_EVENT} from '../actions/event_actions';

const eventsReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_EVENTS:
      return Object.assign({}, oldState, action.events);
    case RECEIVE_EVENT:
      return Object.assign({}, oldState, {[action.event.id]: action.event});
    default:
      return oldState;
  }
};

export default eventsReducer;
