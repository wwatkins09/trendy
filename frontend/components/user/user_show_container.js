import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import UserShow from './user_show';
import {signOut, clearErrors} from '../../actions/session_actions';
import {fetchEventsByUserId, createEvent} from '../../actions/event_actions';

const mapStateToProps = (state) => {
  const currentUser = state.users[state.session.currentUserId];
  const events = currentUser.eventIds.map((eventId) => {
    return state.events[eventId]
  })
  return {
    currentUser,
    events,
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
    fetchEventsByUserId: (userId) => dispatch(fetchEventsByUserId(userId)),
    createEvent: (event) => dispatch(createEvent(event)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));
