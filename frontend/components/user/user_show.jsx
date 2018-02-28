import React from 'react';

class UserShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {category: ''}

    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(event) {

  }

  render() {

    const eventsList = this.props.events.map((event, idx) => {
      if (event) {
        return (
          <li key={idx}>{event.category}</li>
        );
      }
    });

    return (
      <div>
        <h1>Welcome, {this.props.currentUser.email}</h1>
        <button className="session-button" onClick={this.handleSignOut}>Sign out</button>
        <p>Your events:</p>
        <ul>
          {eventsList}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="category"></input>
          <input placeholder="quantity"></input>
          <input placeholder="quality"></input>
          <input placeholder="duration"></input>
          <button>Add event</button>
        </form>
      </div>
    )
  }
}

export default UserShow;
