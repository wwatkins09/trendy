import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import UserShow from './user_show';
import {signOut, clearErrors} from '../../actions/session_actions';
import {fetchCategoriesByUserId} from '../../actions/category_actions';
import {fetchEventsByUserId, createEvent} from '../../actions/event_actions';

const mapStateToProps = (state) => {
  let currentUser;
  let categories;
  if (state.users[state.session.currentUserId]) {
    currentUser = state.users[state.session.currentUserId];
    categories = currentUser.categoryIds.map((categoryId) => {
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
    clearErrors: () => dispatch(clearErrors()),
    fetchCategoriesByUserId: (userId) => dispatch(fetchCategoriesByUserId(userId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));
