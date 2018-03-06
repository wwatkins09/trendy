import React from 'react';
import EventIndexItem from './event_index_item';

const dayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const today = new Date();
today.setHours(0, 0, 0, 0);


class EventIndex extends React.Component {

  constructor(props) {
    super(props);

    this.findEvent = this.findEvent.bind(this);
  }

  componentDidMount() {
    this.props.fetchEventsByCategoryId(this.props.categoryId)
  }

  compareDates(event1, event2) {
    return event1.date - event2.date
  }

  createDate(offset) {
    return new Date(new Date().setDate(new Date().getDate()-offset));
  }

  findEvent(offset, today) {
    return this.props.events.find((event) => event.date === today.getTime() / 1000 - (86400 * offset));
  }

  render() {

    const events = this.props.events.sort(this.compareDates).map((event, idx) => {
      return (
        <EventIndexItem key={idx} event={event} />
      );
    });

    return (
      <div>
        {events}
      </div>
    );
  }
}

export default EventIndex;
