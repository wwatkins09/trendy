import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import CategoryIndex from './category_index';
import {fetchEventsByCategoryId} from '../../actions/event_actions';

const mapStateToProps = (state) => {
  return {
    categories: Object.values(state.categories)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEventsByCategoryId: (categoryId) => dispatch(fetchEventsByCategoryId(categoryId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryIndex));
