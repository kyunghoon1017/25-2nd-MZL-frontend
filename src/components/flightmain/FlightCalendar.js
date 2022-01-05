import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

const FlightSchedule = ({ startDate, selectDates, endDate }) => {
  return (
    <FlightCalendarWrapper>
      <FlightCalendarAwesome>
        <i className="far fa-calendar" />
      </FlightCalendarAwesome>
      <FlightCalendarContent>
        <DatePicker
          dateFormat={dateFormat}
          locale={ko}
          selected={startDate}
          onChange={selectDates}
          minDate={new Date()}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          monthsShown={2}
        />
      </FlightCalendarContent>
    </FlightCalendarWrapper>
  );
};

const dateFormat = 'MM월 dd일';

const FlightCalendarWrapper = styled.section`
  display: flex;
  border: 2px solid #f0f3f5;
  padding: 0.8rem;
  margin-left: 1rem;
`;

const FlightCalendarAwesome = styled.div`
  font-size: 1.1rem;
  color: #2b96ec;
  margin: 0 0.5rem;
`;

const FlightCalendarContent = styled.div`
  input {
    border: none;
    font-size: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;
export default FlightSchedule;
