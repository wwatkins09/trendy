import React from 'react';

const dayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

class FiveDay extends React.Component {

  constructor(props) {
    super(props);
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

    return (
      <div>
        <table>
          <thead>
            <tr>
              {headers}
            </tr>
          </thead>
        </table>
      </div>
    )
  }
}

export default FiveDay;
