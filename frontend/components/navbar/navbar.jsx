import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Navbar;
