import * as APIEventUtil from '../util/api_event_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const RECEIVE_EVENT_ERRORS = 'RECEIVE_EVENT_ERRORS';
export const REMOVE_EVENT = 'REMOVE_EVENT';

export const fetchEventsByCategoryId = (categoryId) => {
  return (dispatch) => {
    return APIEventUtil.fetchEventsByCategoryId(categoryId).then((events) => {
      return dispatch(receiveEvents(events));
    });
  };
};

export const fetchFiveEventsByCategoryId = (categoryId) => {
  return (dispatch) => {
    return APIEventUtil.fetchFiveEventsByCategoryId(categoryId).then((events) => {
      return dispatch(receiveEvents(events));
    });
  };
};

export const fetchThreeMonthsOfEventsByCategoryId = (categoryId) => {
  return (dispatch) => {
    return APIEventUtil.fetchThreeMonthsOfEventsByCategoryId(categoryId).then((events) => {
      return dispatch(receiveEvents(events));
    });
  };
};

export const createEvent = (event) => {
  return (dispatch) => {
    return APIEventUtil.createEvent(event).then((payload) => {
      dispatch(receiveEvent(payload));
    }, (errors) => {
      dispatch(receiveEventErrors(errors.responseJSON));
    });
  };
};

export const deleteEvent = (eventId) => {
  return (dispatch) => {
    return APIEventUtil.deleteEvent(eventId).then((event) => {
      dispatch(removeEvent(event));
    });
  };
};

export const receiveEvents = (events) => {
  return {
    type: RECEIVE_EVENTS,
    events
  };
};

export const receiveEvent = (payload) => {
  return {
    type: RECEIVE_EVENT,
    payload
  };
};

export const removeEvent = (payload) => {
  return {
    type: REMOVE_EVENT,
    payload
  };
};

export const receiveEventErrors = (errors) => {
  return {
    type: RECEIVE_EVENT_ERRORS,
    errors
  };
};
