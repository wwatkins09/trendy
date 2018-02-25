import * as APIEventUtil from '../util/api_event_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';

export const fetchEventsByUserId = (userId) => {
  return (dispatch) => {
    return APIEventUtil.fetchEventsByUserId(userId).then((events) => {
      dispatch(receiveEvents(events));
    })
  }
}

export const receiveEvents = (events) => {
  return {
    type: RECEIVE_EVENTS,
    events
  }
}
