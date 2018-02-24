import {Route, withRouter} from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import SignInContainer from './sign_in/sign_in_container';
import UserShowContainer from './user/user_show_container';


const mapStateToProps = (state) => {
  return {
    currentUserId: state.session.currentUserId
  };
};

const MainPage = (props) => {
  return (
    <div>
      <AuthRoute exact path="/" component={SignInContainer} />
      <ProtectedRoute exact path="/users/:userId" component={UserShowContainer} />
    </div>
  )
}

export default withRouter(connect(mapStateToProps, null)(MainPage));
