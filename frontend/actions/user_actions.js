import * as APIUserUtil from '../util/api_user_util';
import {receiveCurrentUser} from './session_actions';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

export const signUp = (credentials) => {
  return (dispatch) => {
    return APIUserUtil.createUser(credentials).then((user) => {
      dispatch(receiveCurrentUser(user));
    }, (errors) => {
      dispatch(receiveUserErrors(errors.responseJSON));
    });
  }
}

export const receiveUserErrors = (errors) => {
  return {
    type: RECEIVE_USER_ERRORS,
    errors
  }
}
