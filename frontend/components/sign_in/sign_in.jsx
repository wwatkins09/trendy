import React from 'react';

class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};

    this.handleInput = this.handleInput.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
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

  render() {
    return (
      <div>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" value={this.state.email} onChange={this.handleInput('email')}/>
        <input type="password" placeholder="Password" value={this.state.password} onChange={this.handleInput('password')}/>
        <button onClick={this.handleSignIn}>Submit</button>
      </div>
    );
  }
}

export default SignIn;
