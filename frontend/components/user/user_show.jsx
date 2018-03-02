import React from 'react';
import {Link} from 'react-router-dom';
import CategoryIndexContainer from '../categories/category_index_container';

class UserShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {formToggled: false, category: {name: ''}}

    this.handleSignOut = this.handleSignOut.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (parseInt(this.props.match.params.userId) !== this.props.currentUser.id) {
      this.props.history.push(`/users/${this.props.currentUser.id}`)
    }
  }

  handleSignOut(event) {
    event.preventDefault();
    this.props.signOut();
  }

  toggleForm(event) {
    event.preventDefault;
    this.setState({formToggled: !this.state.formToggled})
  }

  handleChange(event) {
    this.setState({category: {name: event.target.value}})
  }

  // handleDateChange(event) {
  //   const timezoneOffset = new Date().getTimezoneOffset();
  //   this.setState({event: Object.assign({}, this.state.event, {date: new Date(event.target.value).getTime() / 1000 + (timezoneOffset*60)})})
  // }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({formToggled: false, category: {name: ''}});
    this.props.createCategory(this.state.category).then(() => {
      this.props.clearErrors();
    });
  }

  // formatDate(date) {
  //   const dateString = new Date(date * 1000);
  //   const year = dateString.getFullYear().toString();
  //   let month;
  //   if (dateString.getMonth() + 1 < 10) {
  //     month = '0' + (dateString.getMonth() + 1).toString();
  //   } else {
  //     month = (dateString.getMonth() + 1).toString();
  //   }
  //   let day;
  //   if (dateString.getDate() < 10) {
  //     day = '0' + dateString.getDate().toString();
  //   } else {
  //     day = dateString.getDate().toString();
  //   }
  //   return year + '-' + month + '-' + day;
  // }

  render() {
    const categoriesList = this.props.currentUser.categoryIds.map((category, idx) => {
        return (
          <li className="category" onClick={this.selectCategory} key={idx}>{category}</li>
        );
    });

    const errorsList = this.props.errors.map((error, idx) => {
      return (<li key={idx} className="error">{error}</li>);
    })

    let categoryForm;
    if (this.state.formToggled) {
      categoryForm = (
        <form onSubmit={this.handleSubmit}>
          <label>Name
            <input placeholder="ex: exercise" onChange={this.handleChange} value={this.state.category.name}></input>
          </label>
          <button>Add category</button>
        </form>
      );
    }

    return (
      <div>
        <h1>Welcome, {this.props.currentUser.email}</h1>
        <button className="session-button" onClick={this.handleSignOut}>Sign out</button>
        <CategoryIndexContainer />
        <button onClick={this.toggleForm}>Add event</button>
        {categoryForm}
      </div>
    )
  }
}

export default UserShow;


// <ul className="errors-list">
//   {errorsList}
// </ul>
// <p>{this.state.selectedCategory}</p>
// <p>Average quantity: {avgQuantity}</p>
// <p>Average quality: {avgQuality}</p>
// <p>Average duration: {avgDuration}</p>
// <Link to="/events/five-day">5 Day</Link>
