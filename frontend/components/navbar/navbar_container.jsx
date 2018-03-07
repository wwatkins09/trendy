import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Navbar from './navbar';
import {signOut} from '../../actions/session_actions';


const mapStateToProps = (state) => {
  return {
    currentUserId: state.session.currentUserId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
