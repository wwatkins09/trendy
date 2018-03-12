import React from 'react';
import {Link} from 'react-router-dom';

class BarGraph extends React.Component {

  constructor(props) {
    super(props);
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

  updateCanvas() {
    const canvas = this.refs.bargraph;
    const ctx = canvas.getContext('2d');
    canvas.height = 550;
    canvas.width = 550;
  }

  render() {
    return (
      <div>
        <canvas ref="bargraph" id="bar-graph" />
      </div>
    );
  }
}

export default BarGraph;
