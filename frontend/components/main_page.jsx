import {Route, withRouter} from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux';
import SignInContainer from './sign_in/sign_in_container';

const mapStateToProps = (state) => {
  return {
    currentUserId: state.session.currentUserId
  };
};

const MainPage = (props) => {
  return (
    <div>MAINPAGE</div>
  )
}
