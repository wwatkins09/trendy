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
    this.props.fetchEventsByCategoryId(this.props.category.id)
  }

  createDate(offset) {
    return new Date(new Date().setDate(new Date().getDate()-offset));
  }

  findEvent(offset, today) {
    return this.props.events.find((event) => event.date === today.getTime() / 1000 - (86400 * offset));
  }

  render() {
    const headers = new Array(5).fill(null).map((el, idx) => {
      const day = this.createDate(idx);
      return (
        <th key={idx}>
          <span>
            {dayArr[day.getDay()]}
            {day.getDate()}
          </span>
        </th>
      );
    });
    const events = new Array(5).fill(null).map((el, idx) => {
      return (
        <EventIndexItem key={idx} event={this.findEvent(idx, today)} />
      );
    });

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Category</th>
              {headers}
            </tr>
          </thead>
          <tbody>
            <tr>
              {events}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default EventIndex;
