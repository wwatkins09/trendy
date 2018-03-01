import {Route, withRouter} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import React from 'react';
import {connect} from 'react-redux';
import SignInContainer from './sign_in/sign_in_container';
import UserShowContainer from './user/user_show_container';
import FiveDayContainer from './events/five_day_container';


const mapStateToProps = (state) => {
  return {
    currentUserId: state.session.currentUserId
  };
};

const MainPage = (props) => {
  return (
    <div>
      <ProtectedRoute path="/users/:userId" component={UserShowContainer} />
      <ProtectedRoute path="/events/five-day" component={FiveDayContainer} />
      <AuthRoute path="/" component={SignInContainer} />
    </div>
  )
}

export default withRouter(connect(mapStateToProps, null)(MainPage));
