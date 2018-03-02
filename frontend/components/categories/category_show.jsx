import React from 'react';

class CategoryShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.category) {
      this.props.fetchCategoryById(categoryId);
    }
  }

  render() {
    return (
      <div>{this.props.category.name}</div>
    );
  }
}

export default CategoryShow;
