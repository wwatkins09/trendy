import React from 'react';
import EventIndexItem from './event_index_item';

const dayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

class EventIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEventsByCategoryId(this.props.category.id)
  }

  createDate(offset) {
    return new Date(new Date().setDate(new Date().getDate()-offset));
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
    const rows = this.props.categories.map((category, idx) => {
      const events = this.props.events.filter((event) => event.category === category)
      return (
        <EventIndexItem key={idx} category={category} events={events} />
      );
    })

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
            {rows}
          </tbody>
        </table>
      </div>
    )
  }
}

export default EventIndex;