import React from 'react';
import SignInContainer from './sign_in/sign_in_container';
import NavbarContainer from './navbar/navbar_container';
import MainPage from './main_page';

const App = (props) => {
  return (
    <div>
      <NavbarContainer />
      <MainPage />
    </div>
  );
}

export default App;
