import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import UserShow from './user_show';
import {signOut} from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.users[state.session.currentUserId]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));
