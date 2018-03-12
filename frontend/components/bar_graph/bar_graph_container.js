import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import BarGraph from './bar_graph';
import {fetchCategoryById} from '../../actions/category_actions';
import {fetchThreeMonthsOfEventsByCategoryId} from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
  const categoryId = parseInt(ownProps.match.params.categoryId);
  const category = state.categories[categoryId] || {name: ''}
  const events = Object.values(state.events).filter((event) => (event.categoryId === categoryId && event.date >= (new Date().getTime() / 1000 - 7776000)))
  return {
    categoryId,
    category,
    events
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategoryById: (categoryId) => dispatch(fetchCategoryById(categoryId)),
    fetchThreeMonthsOfEventsByCategoryId: (categoryId) => dispatch(fetchThreeMonthsOfEventsByCategoryId(categoryId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BarGraph));
