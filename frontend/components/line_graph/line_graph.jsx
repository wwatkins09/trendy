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
    canvas.height = 600;
    canvas.width = 800;
  }

  render() {
    return (
      <div>
        <canvas ref="linegraph" id="line-graph" />
      </div>
    )
  }
}

export default LineGraph;
