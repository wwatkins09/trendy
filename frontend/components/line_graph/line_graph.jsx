import React from 'react';
import {Link} from 'react-router-dom';

const today = new Date();
today.setHours(0, 0, 0, 0);
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

class LineGraph extends React.Component {

  constructor(props) {
    super(props);
    this.state = {weeklyEvents: this.sortEvents(props.events)}

    this.updateCanvas = this.updateCanvas.bind(this);
  }

  componentWillReceiveProps(props) {
    if (props.events) {
      this.setState({weeklyEvents: this.sortEvents(props.events)})
    }
  }

  componentDidMount() {
    if (!this.props.category.id) {
      this.props.fetchCategoryById(this.props.categoryId);
    }
    this.props.fetchThreeMonthsOfEventsByCategoryId(this.props.categoryId);
    this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  sortEvents(events) {
    const currentTimestamp = today.getTime() / 1000;
    return Array(13).fill(null).map((el, idx) => {
      return events.filter((event) => (event.date > currentTimestamp - ((idx + 1) * 86400 * 7) && event.date <= currentTimestamp - (idx * 86400 * 7)));
    }).reverse();
  }

  updateCanvas() {
    const canvas = this.refs.linegraph;
    const ctx = canvas.getContext('2d');
    canvas.height = 550;
    canvas.width = 550;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    for (let i = 0; i < 6; i++) {
      ctx.beginPath();
      ctx.moveTo(0, 100*i + 25);
      ctx.lineTo(500, 100*i + 25);
      ctx.stroke();
      ctx.closePath();
    }

    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    let previousCenter;
    this.state.weeklyEvents.forEach((week, idx) => {
      const originX = (500 / 13 * idx) + 25;
      const originY = 525 - ((week.length / 7) * 500);
      if (previousCenter) {
        ctx.beginPath();
        ctx.moveTo(previousCenter[0], previousCenter[1]);
        ctx.lineTo(originX, originY);
        ctx.closePath();
        ctx.stroke();
      }
      ctx.beginPath();
      ctx.arc(originX, originY, 5, 0, (Math.PI * 2), false);
      ctx.closePath();
      ctx.stroke();
      previousCenter = [originX, originY];
    })

  }

  render() {

    const yAxis = [5, 4, 3, 2, 1, 0].map((num, idx) => {
      return <span key={idx} className="line-graph-y-axis-label">
        <p>
          {num * 20}%
        </p>
      </span>
    });

    const xAxis = Array(13).fill(null).map((el, idx) => {
      const day = new Date(today.getTime() - ((12 - idx) * 86400000 * 7));
      const content = (day.getDate() / 7 <= 1) ? months[day.getMonth()] : day.getDate();
      return (<p key={idx}>{content}</p>)
    });

    return (
      <div id="line-graph-container">
        <h3 id="line-graph-title">{this.props.category.name}</h3>
        <Link to={`/categories/${this.props.categoryId}`}>Back</Link>
        <content id="line-graph-upper">
          <span id="line-graph-y-axis">{yAxis}</span>
          <canvas ref="linegraph" id="line-graph" />
        </content>
        <span id="line-graph-x-axis">
          {xAxis}
        </span>
      </div>
    )
  }
}

export default LineGraph;
