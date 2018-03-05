import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import CategoryShow from './category_show';
import {fetchCategoryById} from '../../actions/category_actions';
import {createEvent} from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => {

  let category = state.categories[ownProps.match.params.categoryId];
  if (category) {

  } else {
    category = {name: '', userId: state.session.currentUserId};
  }

  return {
    category
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategoryById: (categoryId) => dispatch(fetchCategoryById(categoryId)),
    createEvent: (event) => dispatch(createEvent(event))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryShow));
