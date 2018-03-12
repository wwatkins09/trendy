import React from 'react';
import {Link} from 'react-router-dom';

const findEvent = (events, offset, today) => {
  return events.find((event) => event.date === today.getTime() / 1000 - (86400 * offset));
}

class CategoryIndexItem extends React.Component {

  constructor(props) {
    super(props);

    this.updateCanvas = this.updateCanvas.bind(this);
  }

  componentDidMount() {
    this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas() {
    const canvas = this.refs.circle;
    if (canvas) {
      canvas.width = 30;
      canvas.height = 30;
      const ctx = canvas.getContext('2d');
      ctx.strokeStyle = 'lightgray';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(15, 15, 10, 0, (Math.PI * 2), false);
      ctx.closePath();
      ctx.stroke();
      ctx.strokeStyle = 'blue';
      ctx.beginPath();
      ctx.arc(15, 15, 10, (Math.PI * 1.5), ((Math.PI * 1.5) + (Math.PI * 2 * (this.props.events.length / 5))), false);
      ctx.stroke();
    }
  }

  render() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const days = Array(5).fill(null).map((el, idx) => {
      const content = findEvent(this.props.events, idx, today) ? '✓' : 'X';
      return (<td key={idx}>{content}</td>);
    })

    return (
      <tr className="category-index-row">
        <td><Link to={`/categories/${this.props.category.id}`}>{this.props.category.name}</Link></td>
        <td><canvas ref="circle" className="five-day-circle"/></td>
        {days}
      </tr>
    );
  }
}

export default CategoryIndexItem;
