import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import UserShow from './user_show';
import {signOut} from '../../actions/session_actions';
import {fetchEventsByUserId} from '../../actions/event_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.users[state.session.currentUserId],
    events: state.events
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
    fetchEventsByUserId: (userId) => dispatch(fetchEventsByUserId(userId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));
