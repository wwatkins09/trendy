import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import SignIn from './sign_in';
import {signIn} from '../../actions/session_actions';
import {signUp} from '../../actions/user_actions';

const mapStateToProps = (state) => {
  return {
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials)),
    signUp: (credentials) => dispatch(signUp(credentials))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));
