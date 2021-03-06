import React from 'react';
import CategoryIndexItem from './category_index_item';

const dayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const today = new Date();
today.setHours(0, 0, 0, 0);

class CategoryIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCategoriesByUserId(this.props.currentUserId).then(() => {
      this.props.categories.forEach((category) => {
        this.props.fetchFiveEventsByCategoryId(category.id)
      });
    });
  }

  createDate(offset) {
    return new Date(new Date().setDate(new Date().getDate()-offset));
  }

  render() {
    const headers = new Array(5).fill(null).map((el, idx) => {
      const day = this.createDate(idx);
      return (
        <th className="category-index-header" key={idx}>
          <span>
            <p>
              {dayArr[day.getDay()]}
            </p>
            <p>
              {day.getDate()}
            </p>
          </span>
        </th>
      );
    });

    const categories = this.props.categories.map((category, idx) => {
      const events = this.props.events.filter((event) => event.categoryId === category.id && event.date >= (today.getTime() / 1000) - 345600)
      return <CategoryIndexItem key={idx} category={category} events={events}/>
    })

    return (
      <table>
        <thead>
          <tr id="category-index-header-row">
            <th className="category-index-header">Category</th>
            <th className="category-index-header">Status</th>
            {headers}
          </tr>
        </thead>
        <tbody>
          {categories}
        </tbody>
      </table>
    );
  }
}

export default CategoryIndex;
