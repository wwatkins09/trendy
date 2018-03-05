import React from 'react';

class CategoryShow extends React.Component {

  constructor(props) {
    super(props);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    this.state = {categoryId: ownProps.match.params.categoryId, date: today.getTime() / 1000, quantity: 0, quality: 0, duration: 0};

    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if (!this.props.category.name) {
      this.props.fetchCategoryById(this.props.match.params.categoryId);
    }
  }

  handleChange(field) {
    return (event) => {
      this.setState({[field]: event.target.value});
    }
  }

  handleSubmit(event) {
    event.preventDefault();
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

  handleDateChange(event) {
    const timezoneOffset = new Date().getTimezoneOffset();
    this.setState({date: new Date(event.target.value).getTime() / 1000 + (timezoneOffset*60)})
  }

  render() {
    return (
      <div>
        {this.props.category.name}
        <form id="new-trend-form" onSubmit={this.handleSubmit}>
          <input type="date" value={this.formatDate(this.state.date)} onChange={this.handleDateChange}></input>
          <input type="number" value={this.state.quantity} onChange={this.handleChange('quantity')}></input>
          <input type="number" value={this.state.quality} onChange={this.handleChange('quality')}></input>
          <input type="number" value={this.state.duration} onChange={this.handleChange('duration')}></input>
            <button>Create new event</button>
        </form>
      </div>
    );
  }
}

export default CategoryShow;
