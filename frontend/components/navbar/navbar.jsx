import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUserId) {
      return (
        <div>
          <Link to="/">Home</Link>
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
