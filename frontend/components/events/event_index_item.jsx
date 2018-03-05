import React from 'react';

class EventIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.updateCanvas();
  // }
  //
  // componentDidUpdate() {
  //   this.updateCanvas();
  // }
  //
  // updateCanvas() {
  //   const canvas = document.getElementById(`circle-${this.props.category}`);
  //   if (canvas) {
  //     canvas.width = 30;
  //     canvas.height = 30;
  //     const ctx = canvas.getContext('2d');
  //     ctx.strokeStyle = 'lightgray';
  //     ctx.lineWidth = 3;
  //     ctx.beginPath();
  //     ctx.arc(15, 15, 10, 0, (Math.PI * 2), false);
  //     ctx.closePath();
  //     ctx.stroke();
  //     ctx.strokeStyle = 'blue';
  //     ctx.beginPath();
  //     ctx.arc(15, 15, 10, (Math.PI * 1.5), ((Math.PI * 1.5) + (Math.PI * 2 * (this.props.events.length / 5))), false);
  //     ctx.stroke();
  //   }
  // }

  render() {
    // const today = new Date();
    // today.setHours(0, 0, 0, 0);
    // <td>
    //   <canvas id={`circle-${this.props.categoryId}`} className="five-day-circle"/>
    // </td>
    let content;
    if (this.props.event) {
      content = this.props.event.date
    }
    return (
      <div>{content}</div>
    );
  }
}

export default EventIndexItem;
