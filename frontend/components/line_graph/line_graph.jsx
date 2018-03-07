import React from 'react';

const today = new Date();
today.setHours(0, 0, 0, 0);
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

class LineGraph extends React.Component {

  constructor(props) {
    super(props);

    this.updateCanvas = this.updateCanvas.bind(this);
  }

  componentDidMount() {
    if (!this.props.category.id) {
      this.props.fetchCategoryById(this.props.categoryId);
    }
    this.props.fetchThreeMonthsOfEventsByCategoryId(this.props.categoryId);
    this.updateCanvas();
  }

  updateCanvas() {
    const canvas = this.refs.linegraph;
    const ctx = canvas.getContext('2d');
    canvas.height = 500;
    canvas.width = 806;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    for (let i = 0; i < 6; i++) {
      ctx.beginPath();
      ctx.moveTo(0, 100*i);
      ctx.lineTo(806, 100*i);
      ctx.stroke();
    }

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
