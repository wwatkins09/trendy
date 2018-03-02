import React from 'react';

class CategoryIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
      </tr>
    );
  }
}

export default CategoryIndexItem;


// const today = new Date();
// today.setHours(0, 0, 0, 0);
// const days = Array(5).fill(null).map((el, idx) => {
//   const content = findEvent(this.props.events, idx, today) ? '✓' : 'X';
//   return (<td key={idx}>{content}</td>);
// })

// return (
//   <tr>
//     <td><canvas id={`circle-${this.props.category.name}`} className="five-day-circle"/></td>
//     <td>{this.props.category.name}</td>
//     {days}
//   </tr>
// );
