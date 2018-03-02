import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import CategoryIndex from './category_index';
import {fetchCategoriesByUserId} from '../../actions/category_actions';
import {fetchEventsByCategoryId} from '../../actions/event_actions';

const mapStateToProps = (state) => {
  return {
    currentUserId: state.session.currentUserId,
    categories: Object.values(state.categories),
    events: Object.values(state.events)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategoriesByUserId: (userId) => dispatch(fetchCategoriesByUserId(userId)),
    fetchEventsByCategoryId: (categoryId) => dispatch(fetchEventsByCategoryId(categoryId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryIndex));
