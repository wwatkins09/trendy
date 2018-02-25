import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import UserShow from './user_show';
import {signOut} from '../../actions/session_actions';
import {fetchEventsByUserId} from '../../actions/event_actions';

const mapStateToProps = (state) => {
  const currentUser = state.users[state.session.currentUserId];
  const events = currentUser.eventIds.map((eventId) => {
    return state.events[eventId]
  })
  return {
    currentUser,
    events
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
    fetchEventsByUserId: (userId) => dispatch(fetchEventsByUserId(userId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));
