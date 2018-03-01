import React from 'react';

const findEvent = (events, offset, today) => {
  return events.find((event) => event.date === today.getTime() / 1000 - (86400 * offset));
}

class FiveDayIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas() {
    const canvas = document.getElementById(`circle-${this.props.category}`);
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(20, 20, 10, 0, (Math.PI * 2) * (this.props.events.length / 5), true)
    ctx.stroke();
  }

  render() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const days = Array(5).fill(null).map((el, idx) => {
      const content = findEvent(this.props.events, idx, today) ? '✓' : 'X';
      return (<td key={idx}>{content}</td>);
    })

    return (
      <tr>
        <td><canvas id={`circle-${this.props.category}`} /></td>
        <td>{this.props.category}</td>
        {days}
      </tr>
    );
  }
}

export default FiveDayIndexItem;
