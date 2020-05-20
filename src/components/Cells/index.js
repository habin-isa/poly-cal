import React from 'react';
// import * as S from './styles';
import { object, instanceOf } from 'prop-types';

const Cells = ({ dateFns, currentDate, selectedDate }) => {
  const monthStart = dateFns.startOfMonth(currentDate);
  const monthEnd = dateFns.endOfMonth(monthStart);
  const startDate = dateFns.startOfWeek(monthStart);
  const endDate = dateFns.endOfWeek(monthEnd);
  const dateFormat = 'd';
  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = '';
  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = dateFns.format(day, dateFormat);
      days.push(
        <div
          className={`column cell ${
            !dateFns.isSameMonth(day, monthStart) ? 'disabled' : dateFns.isSameDay(day, selectedDate) ? 'selected' : ''
          }`}
          key={day}
        >
          <span className="number">{formattedDate}</span>
          <span className="bg">{formattedDate}</span>
        </div>
      );
      day = dateFns.addDays(day, 1);
    }
    rows.push(
      <div className="row" key={day}>
        {' '}
        {days}{' '}
      </div>
    );
    days = [];
  }
  return <div className="body">{rows}</div>;
};

Cells.propTypes = {
  dateFns: object,
  currentDate: instanceOf(Date),
  selectedDate: instanceOf(Date)
};

Cells.defaultProps = {
  dateFns: {},
  currentDate: function() {
    return new Date();
  },
  selectedDate: function() {
    return new Date();
  }
};

export default Cells;
