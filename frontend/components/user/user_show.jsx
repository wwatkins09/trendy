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
    this.setState({category: '', quantity: 0, quality: 0, duration: 0})
    this.props.createEvent(this.state).then(() => {
      this.props.clearErrors();
    });
  }

  render() {

    const eventsList = this.props.events.map((event, idx) => {
      if (event) {
        return (
          <li key={idx}>{event.category}</li>
        );
      }
    });

    const errorsList = this.props.errors.map((error, idx) => {
      return (<li key={idx} className="error">{error}</li>);
    })
    return (
      <div>
        <h1>Welcome, {this.props.currentUser.email}</h1>
        <button className="session-button" onClick={this.handleSignOut}>Sign out</button>
        <p>Your events:</p>
        <ul>
          {eventsList}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label>Category
            <input placeholder="category" onChange={this.handleChange('category')} value={this.state.category}></input>
          </label>
          <label>Quantity
            <input placeholder="quantity" type="number" onChange={this.handleChange('quantity')} value={this.state.quantity}></input>
          </label>
          <label>Quality
            <input placeholder="quality" type="number" onChange={this.handleChange('quality')} value={this.state.quality}></input>
          </label>
          <label>Duration
            <input placeholder="duration" type="number" onChange={this.handleChange('duration')} value={this.state.duration}></input>
          </label>
          <button>Add event</button>
        </form>
        <ul className="errors-list">
          {errorsList}
        </ul>
      </div>
    )
  }
}

export default UserShow;
