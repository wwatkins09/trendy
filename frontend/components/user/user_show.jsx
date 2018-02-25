import React from 'react';

class UserShow extends React.Component {

  constructor(props) {
    super(props);

    this.handleSignOut = this.handleSignOut.bind(this);
  }

  componentDidMount() {
    if (parseInt(this.props.match.params.userId) !== this.props.currentUser.id) {
      this.props.history.push(`/users/${this.props.currentUser.id}`)
    } else {
      this.props.fetchEventsByUserId(this.props.currentUser.id)
    }
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
