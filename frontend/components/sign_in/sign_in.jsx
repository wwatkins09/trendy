import React from 'react';

class SignIn extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Submit</button>
      </div>
    );
  }
}

export default SignIn;
