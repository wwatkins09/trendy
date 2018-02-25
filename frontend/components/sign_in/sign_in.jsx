import React from 'react';

class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};

    this.handleInput = this.handleInput.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleInput(field) {
    return (event) => {
      this.setState({[field]: event.target.value});
    }
  }

  handleSignIn(event) {
    event.preventDefault();
    this.props.signIn(this.state);
  }

  handleSignUp(event) {
    event.preventDefault();
    this.props.signUp(this.state);
  }

  render() {
    return (
      <div id="sign-in">
        <content id="sign-in-form">
          <h1>Welcome to Trendy!</h1>
          <h2>Sign In</h2>
          <input type="email" placeholder="Email" value={this.state.email} onChange={this.handleInput('email')}/>
          <input type="password" placeholder="Password" value={this.state.password} onChange={this.handleInput('password')}/>
          <span id="sign-in-buttons">
            <span className="session-button" onClick={this.handleSignIn}>Sign in</span>
            <span className="session-button" onClick={this.handleSignUp}>Sign up</span>
          </span>
        </content>
      </div>
    );
  }
}

export default SignIn;
