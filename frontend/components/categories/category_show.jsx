import React from 'react';
import EventIndexContainer from '../events/event_index_container';
import {Link} from 'react-router-dom';

const today = new Date();
today.setHours(0, 0, 0, 0);

Date.prototype.stdTimezoneOffset = function() {
    var jan = new Date(this.getFullYear(), 0, 1);
    var jul = new Date(this.getFullYear(), 6, 1);
    return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
}

Date.prototype.dst = function() {
  return this.getTimezoneOffset() < this.stdTimezoneOffset();
}

class CategoryShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {categoryId: props.match.params.categoryId, date: today.getTime() / 1000, quantity: 0, quality: 1, duration: 0};

    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if (!this.props.category.name) {
      this.props.fetchCategoryById(this.props.categoryId);
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleChange(field) {
    return (event) => {
      this.setState({[field]: event.target.value});
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createEvent(this.state).then(() => {
      this.props.clearErrors();
    });
    this.setState({date: today.getTime() / 1000, quantity: 0, quality: 1, duration: 0})
  }

  createDate(offset) {
    return new Date(new Date().setDate(new Date().getDate()-offset));
  }

  formatDate(date) {
    let timezoneOffset = new Date().getTimezoneOffset();
    if (new Date().dst) {
      timezoneOffset += 60;
    }
    const dateString = new Date((date + timezoneOffset*60) * 1000);
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

  handleDateChange(event) {
    const dateString = event.target.value;
    const date = Date.UTC(parseInt(dateString.slice(0, 4)), (parseInt(dateString.slice(5, 7)) - 1), parseInt(dateString.slice(8))) / 1000;
    this.setState({date})
  }

  render() {

    const errorsList = this.props.errors.map((error, idx) => {
      return (<li className="error" key={idx}>{error}</li>)
    })

    return (
      <div id="category-show">
        <h3>{this.props.category.name}</h3>
        <form id="new-trend-form" onSubmit={this.handleSubmit}>
          <label>Date
            <input type="date" value={this.formatDate(this.state.date)} onChange={this.handleDateChange}></input>
          </label>
          <label>Quantity
            <input type="number" value={this.state.quantity} onChange={this.handleChange('quantity')}></input>
          </label>
          <label>Quality (1-10)
            <input type="number" value={this.state.quality} onChange={this.handleChange('quality')}></input>
          </label>
          <label>Duration (minutes)
            <input type="number" value={this.state.duration} onChange={this.handleChange('duration')}></input>
          </label>
            <button>Create new event</button>
        </form>
        <ul className="errors-list" id="new-event-errors">
          {errorsList}
        </ul>
        <EventIndexContainer categoryId={this.props.categoryId}/>
        <Link to={`/categories/${this.props.categoryId}/line-graph`}>Line graph</Link>
        <Link to={`/categories/${this.props.categoryId}/bar-graph`}>Bar graph</Link>
      </div>
    );
  }
}

export default CategoryShow;
