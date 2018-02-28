import React from 'react';

class UserShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {category: '', quantity: 0, quality: 0, duration: 0, userId: this.props.currentUser.id}

    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  handleChange(field) {
    return (event) => {
      this.setState({[field]: event.target.value})
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createEvent(this.state).then(() => {
      this.setState({category: '', quantity: 0, quality: 0, duration: 0})
    })
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
          <input placeholder="category" onChange={this.handleChange('category')} value={this.state.category}></input>
          <input placeholder="quantity" type="number" onChange={this.handleChange('quantity')} value={this.state.quantity}></input>
          <input placeholder="quality" type="number" onChange={this.handleChange('quality')} value={this.state.quality}></input>
          <input placeholder="duration" type="number" onChange={this.handleChange('duration')} value={this.state.duration}></input>
          <button>Add event</button>
        </form>
      </div>
    )
  }
}

export default UserShow;
