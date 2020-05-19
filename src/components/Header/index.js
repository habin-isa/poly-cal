import React from 'react';
// import * as S from './styles';
import { func, object, instanceOf } from 'prop-types';

const Header = ({ dateFns, setCurrentDate, currentDate }) => {
  const dateFormat = 'MMMM yyyy';
  const nextMonth = () => {
    setCurrentDate(dateFns.addMonths(currentDate, 1));
  };
  const prevMonth = () => {
    setCurrentDate(dateFns.subMonths(currentDate, 1));
  };

  return (
    <div className="header row flex-middle">
      <div className="column col-start">
        <div className="icon" onClick={prevMonth}>
          chevron_left
        </div>
      </div>
      <div className="column col-center">
        <span>{dateFns.format(currentDate, dateFormat)}</span>
      </div>
      <div className="column col-end">
        <div className="icon" onClick={nextMonth}>
          chevron_right
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  dateFns: object,
  setCurrentDate: func,
  currentDate: instanceOf(Date)
};

Header.defaultProps = {
  dateFns: {},
  setCurrentDate: () => {},
  currentDate: function() {
    return new Date();
  }
};

export default Header;
