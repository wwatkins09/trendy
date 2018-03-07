import React from 'react';

class LineGraph extends React.Component {

  constructor(props) {
    super(props);

    this.updateCanvas = this.updateCanvas.bind(this);
  }

  componentDidMount() {
    if (!this.props.category.id) {
      this.props.fetchCategoryById(this.props.categoryId);
    }
    this.updateCanvas();
  }

  updateCanvas() {
    const canvas = this.refs.linegraph;
    const ctx = canvas.getContext('2d');
    canvas.height = 600;
    canvas.width = 800;

    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    for (let i = 0; i < 6; i++) {
      ctx.beginPath();
      ctx.moveTo(0, 100*i + 1);
      ctx.lineTo(800, 100*i + 1);
      ctx.stroke();
    }

  }

  render() {

    const yAxis = [0, 1, 2, 3, 4, 5].map((num, idx) => {
      return <span key={idx} className="line-graph-y-axis-label">
        <p>
          {num * 20}%
        </p>
      </span>
    });

    return (
      <div id="line-graph-container">
        <span id="line-graph-y-axis">{yAxis}</span>
        <canvas ref="linegraph" id="line-graph" />
      </div>
    )
  }
}

export default LineGraph;
