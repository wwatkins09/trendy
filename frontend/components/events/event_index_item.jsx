import React from 'react';

class EventIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let content;
    if (this.props.event) {
      content = new Date(this.props.event.date * 1000).toDateString();
    }
    return (
      <div>{content}</div>
    );
  }
}

export default EventIndexItem;
