import {Route, withRouter, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import React from 'react';
import {connect} from 'react-redux';
import SignInContainer from './sign_in/sign_in_container';
import UserShowContainer from './user/user_show_container';
import CategoryShowContainer from './categories/category_show_container';
import LineGraphContainer from './line_graph/line_graph_container';
import BarGraphContainer from './bar_graph/bar_graph_container';

const mapStateToProps = (state) => {
  return {
    currentUserId: state.session.currentUserId
  };
};

const MainPage = (props) => {
  return (
    <div>
      <ProtectedRoute path="/users/:userId" component={UserShowContainer} />
      <Switch>
        <ProtectedRoute path="/categories/:categoryId/line-graph" component={LineGraphContainer} />
        <ProtectedRoute path="/categories/:categoryId/bar-graph" component={BarGraphContainer} />
        <ProtectedRoute path="/categories/:categoryId" component={CategoryShowContainer} />
      </Switch>
      <AuthRoute path="/" component={SignInContainer} />
    </div>
  );
};

export default withRouter(connect(mapStateToProps, null)(MainPage));
