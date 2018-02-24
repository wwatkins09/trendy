import * as APISessionUtil from '../util/api_session_util';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';


export const signIn = (credentials) => {
  return (dispatch) => {
    return APISessionUtil.createSession(credentials);
  }
}
