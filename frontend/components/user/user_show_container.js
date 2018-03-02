import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import UserShow from './user_show';
import {signOut, clearErrors} from '../../actions/session_actions';
import {fetchEventsByUserId, createEvent} from '../../actions/event_actions';

const mapStateToProps = (state) => {
  if (state.users[state.session.currentUserId]) {
    const currentUser = state.users[state.session.currentUserId];
    const categories = currentUser.categoryIds.map((categoryId) => {
      return state.categories[categoryId]
    });
  }
  return {
    currentUser,
    categories,
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
