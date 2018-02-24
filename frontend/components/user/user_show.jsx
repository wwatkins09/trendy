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
        <h1>This is your profile page!</h1>
        <button onClick={this.handleSignOut}>Sign out</button>
      </div>
    )
  }
}

export default UserShow;
