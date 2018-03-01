import React from 'react';

const dayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

class FiveDay extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const day1 = new Date();
    const day2 = new Date(new Date().setDate(new Date().getDate()-1));
    const day3 = new Date(new Date().setDate(new Date().getDate()-2));
    const day4 = new Date(new Date().setDate(new Date().getDate()-3));
    const day5 = new Date(new Date().setDate(new Date().getDate()-4));

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>
                <span>
                  {dayArr[day1.getDay()]}
                  {day1.getDate()}
                </span>
              </th>
              <th>
                <span>
                  {dayArr[day2.getDay()]}
                  {day2.getDate()}
                </span>
              </th>
              <th>
                <span>
                  {dayArr[day3.getDay()]}
                  {day3.getDate()}
                </span>
              </th>
              <th>
                <span>
                  {dayArr[day4.getDay()]}
                  {day4.getDate()}
                </span>
              </th>
              <th>
                <span>
                  {dayArr[day5.getDay()]}
                  {day5.getDate()}
                </span>
              </th>
            </tr>
          </thead>

        </table>
      </div>
    )
  }
}

export default FiveDay;
