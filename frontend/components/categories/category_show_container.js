import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import CategoryShow from './category_show';
import {fetchCategoryById} from '../../actions/category_actions';
import {fetchEventsByCategoryId, createEvent} from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => {

  let category = state.categories[ownProps.match.params.categoryId];
  if (category) {

  } else {
    category = {name: '', userId: state.session.currentUserId};
  }

  return {
    categoryId: parseInt(ownProps.match.params.categoryId),
    category
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategoryById: (categoryId) => dispatch(fetchCategoryById(categoryId)),
    createEvent: (event) => dispatch(createEvent(event)),
    fetchEventsByCategoryId: (categoryId) => dispatch(fetchEventsByCategoryId(categoryId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryShow));
