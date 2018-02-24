import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import SignIn from './sign_in';
import {signIn} from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));
