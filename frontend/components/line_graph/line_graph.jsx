import React from 'react';

class LineGraph extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.category.id) {
      this.props.fetchCategoryById(this.props.categoryId);
    }
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default LineGraph;
