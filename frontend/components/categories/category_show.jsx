import React from 'react';

class CategoryShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (!this.props.category.name) {
      this.props.fetchCategoryById(this.props.match.params.categoryId);
    }
  }

  render() {
    return (
      <div>{this.props.category.name}</div>
    );
  }
}

export default CategoryShow;
