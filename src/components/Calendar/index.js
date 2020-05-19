import React, { useState } from 'react';
import * as dateFns from 'date-fns';
import Header from '../Header';
import Cells from '../Cells';
import './Calendar.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysOfWeek = () => {
    const dateFormat = 'ddd';
    const days = [];
    let startDate = dateFns.startOfWeek(currentDate);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="column col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="days row">{days}</div>;
  };

  // const onDateClick = (day) => {
  //   setSelectedDate(day);
  // };

  // const cells = () => {
  //   const monthStart = dateFns.startOfMonth(currentDate);
  //   const monthEnd = dateFns.endOfMonth(monthStart);
  //   const startDate = dateFns.startOfWeek(monthStart);
  //   const endDate = dateFns.endOfWeek(monthEnd);
  //   const dateFormat = 'd';
  //   const rows = [];
  //   let days = [];
  //   let day = startDate;
  //   let formattedDate = '';
  //   while (day <= endDate) {
  //     for (let i = 0; i < 7; i++) {
  //       formattedDate = dateFns.format(day, dateFormat);
  //       const cloneDay = day;
  //       days.push(
  //         <div
  //           className={`column cell ${
  //             !dateFns.isSameMonth(day, monthStart)
  //               ? 'disabled'
  //               : dateFns.isSameDay(day, selectedDate)
  //               ? 'selected'
  //               : ''
  //           }`}
  //           key={day}
  //           // onClick={() => onDateClick(dateFns.parse(cloneDay))}
  //         >
  //           <span className="number">{formattedDate}</span>
  //           <span className="bg">{formattedDate}</span>
  //         </div>
  //       );
  //       day = dateFns.addDays(day, 1);
  //     }
  //     rows.push(
  //       <div className="row" key={day}>
  //         {' '}
  //         {days}{' '}
  //       </div>
  //     );
  //     days = [];
  //   }
  //   return <div className="body">{rows}</div>;
  // };

  return (
    <div className="calendar">
      <Header dateFns={dateFns} setCurrentDate={setCurrentDate} currentDate={currentDate} />
      <div>{daysOfWeek()}</div>
      <Cells dateFns={dateFns} currentDate={currentDate} selectedDate={selectedDate} />
    </div>
  );
};
export default Calendar;
