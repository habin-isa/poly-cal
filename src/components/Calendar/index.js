import React, { useState } from 'react';
import * as dateFns from 'date-fns';
import Header from '../Header';
import Cells from '../Cells';
import './Calendar.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="calendar">
      <Header dateFns={dateFns} setCurrentDate={setCurrentDate} currentDate={currentDate} />
      <Cells dateFns={dateFns} currentDate={currentDate} selectedDate={selectedDate} />
    </div>
  );
};
export default Calendar;
