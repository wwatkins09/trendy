import React from 'react';

const findEvent = (events, offset, today) => {
  return events.find((event) => event.date === today.getTime() / 1000 - (86400 * offset));
}

const FiveDayIndexItem = ({category, events}) => {

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const days = Array(5).fill(null).map((el, idx) => {
    const content = findEvent(events, idx, today) ? '✓' : 'X';
    return (<td key={idx}>{content}</td>);
  })

  return (
    <tr>
      <td>{category}</td>
      {days}
    </tr>
  );
};

export default FiveDayIndexItem;
