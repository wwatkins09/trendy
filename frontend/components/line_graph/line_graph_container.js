import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import LineGraph from './line_graph';
import {fetchCategoryById} from '../../actions/category_actions';

const mapStateToProps = (state, ownProps) => {
  const categoryId = ownProps.match.params.categoryId;
  return {
    categoryId,
    category: state.categories[categoryId]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategoryById: (categoryId) => dispatch(fetchCategoryById(categoryId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LineGraph));
