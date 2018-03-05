import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import EventIndex from './event_index';
import {fetchEventsByCategoryId} from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return {
    currentUser: state.users[state.session.currentUserId],
    categoryId: ownProps.categoryId,
    events: Object.values(state.events).filter((event) => event.categoryId === ownProps.categoryId)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEventsByCategoryId: (userId) => dispatch(fetchEventsByCategoryId(userId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventIndex));
