import React from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const Auth = ({component: Component, path, loggedIn, currentUserId}) => {
  return (
    <Route exact path={path} render={(props) => (
        !loggedIn ? (
          <Component {...props}/>
        ) : (
          <Redirect to={`/users/${currentUserId}`} />
        )
      )}/>
  );
};

const Protected = ({component: Component, path, loggedIn}) => {
  return (
    <Route exact path={path} render={(props) => (
        loggedIn ? (
          <Component {...props}/>
        ) : (
          <Redirect to="/" />
        )
      )}/>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUserId),
    currentUserId: state.session.currentUserId
  };
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
