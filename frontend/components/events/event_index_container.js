import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import EventIndex from './event_index';
import {fetchEventsByCategoryId} from '../../actions/event_actions';

const mapStateToProps = (state) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return {
    currentUser: state.users[state.session.currentUserId],
    categories: Object.values(state.categories),
    events: Object.values(state.events)
    // events: Object.values(state.events).filter((event) => event.date >= today.getTime() / 1000 - 345600)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEventsByCategoryId: (userId) => dispatch(fetchEventsByCategoryId(userId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventIndex));
