import React from 'react';

class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};

    this.handleInput = this.handleInput.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleInput(field) {
    return (event) => {
      this.setState({[field]: event.target.value});
    }
  }

  handleSignIn(event) {
    event.preventDefault();
    this.setState({email: '', password: ''})
    this.props.signIn(this.state).then(() => {
      this.props.clearErrors();
    });
  }

  handleSignUp(event) {
    event.preventDefault();
    this.setState({email: '', password: ''})
    this.props.signUp(this.state).then(() => {
      this.props.clearErrors();
    });
  }

  render() {

    const errorsList = this.props.errors.map((error, idx) => {
      return (<li key={idx} className="error">{error}</li>)
    })

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
          <ul id="errors-list">
            {errorsList}
          </ul>
        </content>
      </div>
    );
  }
}

export default SignIn;
