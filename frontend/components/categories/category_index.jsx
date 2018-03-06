import React from 'react';
import CategoryIndexItem from './category_index_item';

const dayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

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
        <th key={idx}>
          <span>
            {dayArr[day.getDay()]}
            {day.getDate()}
          </span>
        </th>
      );
    });

    const categories = this.props.categories.map((category, idx) => {
      return <CategoryIndexItem key={idx} category={category}/>
    })

    return (
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Category</th>
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

// <table>
//   <thead>
//     <tr>
//       <th></th>
//       <th>Category</th>
//       {headers}
//     </tr>
//   </thead>
//   <tbody>
//     {rows}
//   </tbody>
// </table>
