import * as APIEventUtil from '../util/api_event_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';

export const fetchEventsByUserId = (userId) => {
  return (dispatch) => {
    return APIEventUtil.fetchEventsByUserId(userId).then((events) => {
      dispatch(receiveEvents(events));
    })
  }
}

export const createEvent = (event) => {
  return (dispatch) => {
    return APIEventUtil.createEvent(event).then((payload) => {
      dispatch(receiveEvent(payload))
    })
  }
}

export const receiveEvents = (events) => {
  return {
    type: RECEIVE_EVENTS,
    events
  }
}

export const receiveEvent = (payload) => {
  return {
    type: RECEIVE_EVENT,
    payload
  }
}
