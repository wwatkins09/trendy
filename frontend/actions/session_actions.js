import * as APISessionUtil from '../util/api_session_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const signIn = (credentials) => {
  return (dispatch) => {
    return APISessionUtil.createSession(credentials).then((user) => {
      dispatch(receiveCurrentUser(user));
    }, (errors) => {
      dispatch(receiveSessionErrors(errors.responseJSON));
    });
  }
}

export const signOut = () => {
  return (dispatch) => {
    return APISessionUtil.destroySession().then(() => {
      dispatch(removeCurrentUser())
    })
  }
}

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const removeCurrentUser = () => {
  return {
    type: REMOVE_CURRENT_USER
  };
};

export const receiveSessionErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  }
}
