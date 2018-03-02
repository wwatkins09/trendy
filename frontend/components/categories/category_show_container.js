import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import CategoryShow from './category_show';
import {fetchCategoryById} from '../../actions/category_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    category: state.categories[ownProps.match.params.categoryId]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategoryById: (categoryId) => dispatch(fetchCategoryById(categoryId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryShow));
