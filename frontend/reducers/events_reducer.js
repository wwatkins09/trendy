import {RECEIVE_EVENTS} from '../actions/event_actions';

const eventsReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_EVENTS:
      return Object.assign({}, oldState, action.events)
    default:
      return oldState;
  }
};

export default eventsReducer;
