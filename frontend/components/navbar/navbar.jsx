import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {

  constructor(props) {
    super(props);

    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleSignOut(event) {
    event.preventDefault();
    this.props.signOut();
  }

  render() {
    if (this.props.currentUserId) {
      return (
        <div id="navbar">
          <Link to="/">Home</Link>
          <button className="session-button" onClick={this.handleSignOut}>Sign out</button>
        </div>
      );
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default Navbar;
