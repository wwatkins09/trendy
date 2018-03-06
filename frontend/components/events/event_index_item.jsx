import React from 'react';

class EventIndexItem extends React.Component {

  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event) {
    event.preventDefault();
    this.props.deleteEvent(this.props.event.id);
  }

  render() {
    let content;
    let button;
    if (this.props.event) {
      content = (
        <span>{new Date(this.props.event.date * 1000).toDateString()}</span>
      );
      button = (
        <button onClick={this.handleDelete}>Delete</button>
      )
    }
    return (
      <div>
        {content}
        {button}
      </div>
    );
  }
}

export default EventIndexItem;
