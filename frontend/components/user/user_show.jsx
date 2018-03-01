import React from 'react';
import {Link} from 'react-router-dom';

class UserShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {selectedCategory: null, quantity: 0, quality: 0, duration: 0, event: {category: '', quantity: 0, quality: 0, duration: 0, date: (new Date().setHours(0, 0, 0, 0) / 1000)}}

    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
    this.findAvg = this.findAvg.bind(this);
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
    if (field === 'date') {
      return this.handleDateChange;
    } else {
      return (event) => {
        this.setState({event: Object.assign({}, this.state.event, {[field]: event.target.value})})
      }
    }
  }

  handleDateChange(event) {
    const timezoneOffset = new Date().getTimezoneOffset();
    this.setState({event: Object.assign({}, this.state.event, {date: new Date(event.target.value).getTime() / 1000 + (timezoneOffset*60)})})
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({event: {category: '', quantity: 0, quality: 0, duration: 0, date: (new Date().setHours(0, 0, 0, 0) / 1000)}})
    this.props.createEvent(this.state.event).then(() => {
      this.props.clearErrors();
    });
  }

  formatDate(date) {
    const dateString = new Date(date * 1000);
    const year = dateString.getFullYear().toString();
    let month;
    if (dateString.getMonth() + 1 < 10) {
      month = '0' + (dateString.getMonth() + 1).toString();
    } else {
      month = (dateString.getMonth() + 1).toString();
    }
    let day;
    if (dateString.getDate() < 10) {
      day = '0' + dateString.getDate().toString();
    } else {
      day = dateString.getDate().toString();
    }
    return year + '-' + month + '-' + day;
  }

  selectCategory(event) {
    const selectedCategory = event.target.innerHTML;
    let avgQuantity = 0;
    let avgQuality = 0;
    let avgDuration = 0;
    let count = 0;
    this.props.events.forEach((event) => {
      if (event.category !== selectedCategory) {
        return;
      } else {
        count++;
        avgQuantity += event.quantity;
        avgQuality += event.quality;
        avgDuration += event.duration;
      }
    });
    avgQuantity /= count;
    avgQuality /= count;
    avgDuration /= count;
    this.setState({selectedCategory, avgQuantity, avgQuality, avgDuration});
  }

  findAvg(category, field) {
    if (!this.props.events[0]) {
      return;
    }
    let count = 0;
    let sum = 0;
    this.props.events.forEach((event) => {
      if (event.category !== category) {
        return;
      } else {
        count ++;
        sum += event[field];
      }
    });
    if (count === 0) {
      return 0;
    } else {
      return (sum / count).toFixed(2);
    }
  }

  render() {
    const categoriesList = this.props.currentUser.categories.map((category, idx) => {
        return (
          <li className="category" onClick={this.selectCategory} key={idx}>{category}</li>
        );
    });

    const errorsList = this.props.errors.map((error, idx) => {
      return (<li key={idx} className="error">{error}</li>);
    })
    const avgQuantity = this.findAvg(this.state.selectedCategory, 'quantity');
    const avgQuality = this.findAvg(this.state.selectedCategory, 'quality');
    const avgDuration = this.findAvg(this.state.selectedCategory, 'duration');
    return (
      <div>
        <h1>Welcome, {this.props.currentUser.email}</h1>
        <button className="session-button" onClick={this.handleSignOut}>Sign out</button>
        <p>Your events:</p>
        <ul>
          {categoriesList}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label>Category
            <input placeholder="ex: exercise" onChange={this.handleChange('category')} value={this.state.event.category}></input>
          </label>
          <label>Date
            <input type="date" onChange={this.handleChange('date')} value={this.formatDate(this.state.event.date)}></input>
          </label>
          <label>Quantity
            <input placeholder="quantity" type="number" onChange={this.handleChange('quantity')} value={this.state.event.quantity}></input>
          </label>
          <label>Quality
            <input placeholder="quality" type="number" onChange={this.handleChange('quality')} value={this.state.event.quality}></input>
          </label>
          <label>Duration
            <input placeholder="duration" type="number" onChange={this.handleChange('duration')} value={this.state.event.duration}></input>
          </label>
          <button>Add event</button>
        </form>
        <ul className="errors-list">
          {errorsList}
        </ul>
        <p>{this.state.selectedCategory}</p>
        <p>Average quantity: {avgQuantity}</p>
        <p>Average quality: {avgQuality}</p>
        <p>Average duration: {avgDuration}</p>
        <Link to="/events/five-day">5 Day</Link>
      </div>
    )
  }
}

export default UserShow;
