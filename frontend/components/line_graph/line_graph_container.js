import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import LineGraph from './line_graph';
import {fetchCategoryById} from '../../actions/category_actions';
import {fetchThreeMonthsOfEventsByCategoryId} from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
  const categoryId = parseInt(ownProps.match.params.categoryId);
  const category = state.categories[categoryId] || {name: ''}
  return {
    categoryId,
    category
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategoryById: (categoryId) => dispatch(fetchCategoryById(categoryId)),
    fetchThreeMonthsOfEventsByCategoryId: (categoryId) => dispatch(fetchThreeMonthsOfEventsByCategoryId(categoryId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LineGraph));
