import React from 'react';

class UserShow extends React.Component {

  constructor(props) {
    super(props);

    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleSignOut(event) {
    event.preventDefault();
    this.props.signOut();
  }

  render() {
    return (
      <div>
        <h1>Welcome, {this.props.currentUser.email}</h1>
        <button className="session-button" onClick={this.handleSignOut}>Sign out</button>
      </div>
    )
  }
}

export default UserShow;
