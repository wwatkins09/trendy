import * as APIEventUtil from '../util/api_event_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const RECEIVE_EVENT_ERRORS = 'RECEIVE_EVENT_ERRORS';

export const fetchEventsByCategoryId = (categoryId) => {
  return (dispatch) => {
    return APIEventUtil.fetchEventsByCategoryId(categoryId).then((events) => {
      return dispatch(receiveEvents(events));
    });
  };
}

export const fetchFiveEventsByCategoryId = (categoryId) => {
  return (dispatch) => {
    return APIEVentUtil.fetchFiveEventsByCategoryId(categoryId).then((events) => {
      return dispatch(receiveEvents(events));
    });
  };
}

export const createEvent = (event) => {
  return (dispatch) => {
    return APIEventUtil.createEvent(event).then((payload) => {
      dispatch(receiveEvent(payload));
    }, (errors) => {
      dispatch(receiveEventErrors(errors.responseJSON));
    });
  };
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

export const receiveEventErrors = (errors) => {
  return {
    type: RECEIVE_EVENT_ERRORS,
    errors
  }
}
