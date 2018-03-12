import React from 'react';

Date.prototype.stdTimezoneOffset = function() {
    var jan = new Date(this.getFullYear(), 0, 1);
    var jul = new Date(this.getFullYear(), 6, 1);
    return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
}

Date.prototype.dst = function() {
  return this.getTimezoneOffset() < this.stdTimezoneOffset();
}

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
      let timezoneOffset = new Date().getTimezoneOffset();
      if (new Date().dst()) {
        timezoneOffset += 60;
      }
      content = (
        <span>{new Date((this.props.event.date + (timezoneOffset*60)) * 1000).toDateString()}</span>
      );
      button = (
        <button className="event-delete-button" onClick={this.handleDelete}>Delete</button>
      )
    }
    return (
      <div className="event-index-item">
        {content}
        {button}
      </div>
    );
  }
}

export default EventIndexItem;
