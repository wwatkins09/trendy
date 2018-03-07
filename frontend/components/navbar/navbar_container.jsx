import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Navbar from './navabar';

const mapStateToProps = (state) => {
  return {
    currentUserId: state.session.currentUserId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
