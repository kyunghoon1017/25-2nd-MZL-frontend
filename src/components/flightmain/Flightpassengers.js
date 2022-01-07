import React from 'react';
import styled from 'styled-components/macro';

const Passengers = ({
  passengers,
  seatType,
  handlePassengers,
  handleSeatType,
  countPassengers,
}) => {
  return (
    <PassengersMain>
      <PassengersGrades>
        <PassengersGradesh1>인원 & 좌석등급</PassengersGradesh1>
      </PassengersGrades>
      <PassengersSelectSection>
        <PassengersSelectButton>
          <PassengersDl>
            <PassengersDt>
              성인
              <PassengersSpan>만 12세 이상</PassengersSpan>
            </PassengersDt>
            <PassengersDd>
              <PassengersButton onClick={countPassengers}>-</PassengersButton>
              <PassengersSpan>{passengers.adult}</PassengersSpan>
              <PassengersButton onClick={countPassengers}>+</PassengersButton>
            </PassengersDd>
          </PassengersDl>
          <PassengersDl>
            <PassengersDt>
              소아
              <PassengersSpan>만 12세 미만</PassengersSpan>
            </PassengersDt>
            <PassengersDd>
              <PassengersButton>-</PassengersButton>
              <PassengersSpan>{passengers.kid}</PassengersSpan>
              <PassengersButton>+</PassengersButton>
            </PassengersDd>
          </PassengersDl>
          <PassengersDl>
            <PassengersDt>
              유아
              <PassengersSpan>24개월 미만</PassengersSpan>
            </PassengersDt>
            <InfantDd>
              <PassengersButton>-</PassengersButton>
              <PassengersSpan>{passengers.baby}</PassengersSpan>
              <PassengersButton>+</PassengersButton>
            </InfantDd>
          </PassengersDl>
        </PassengersSelectButton>
        <PassengersGradesSelect>
          <PassengersGradesSelectUl onChange={handleSeatType}>
            <PassengersGradesSelectLi>
              <PassengersInputDiv>
                <PassengersInput
                  type="radio"
                  id="economy"
                  name="seatType"
                  value="일반석"
                />
                <label htmlFor="economy">일반석</label>
              </PassengersInputDiv>
            </PassengersGradesSelectLi>
            <PassengersGradesSelectLi>
              <PassengersInputDiv>
                <PassengersInput
                  type="radio"
                  id="business"
                  name="seatType"
                  value="비즈니스석"
                />
                <label htmlFor="business">비즈니스석</label>
              </PassengersInputDiv>
            </PassengersGradesSelectLi>
          </PassengersGradesSelectUl>
        </PassengersGradesSelect>
      </PassengersSelectSection>
    </PassengersMain>
  );
};

const PassengersMain = styled.main`
  position: absolute;
  z-index: 1;
  background: #fff;
  margin-top: 25.5rem;
`;

const PassengersGrades = styled.div`
  height: auto;
  line-height: normal;
`;

const PassengersGradesh1 = styled.h1`
  display: flex;
  line-height: 20px;
  padding: 20px 24px 0px 24px;
  font-size: 17px;
  font-weight: bold;
  gap: 11em;
  margin-bottom: 1em;
`;

const PassengersSelectSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const PassengersSelectButton = styled.div`
  display: flex;
  flex-direction: column;
`;

const PassengersDl = styled.dl`
  display: flex;
  align-items: center;
  gap: 10em;
  padding: 1em 0;
`;

const PassengersDt = styled.dt`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  font-size: 15px;
  padding: 0 24px;
`;

const PassengersDd = styled.dd`
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding-right: 2em;
`;

const InfantDd = styled.dd`
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-left: 0.2em;
`;

const PassengersButton = styled.button`
  font-size: 15px;
  cursor: pointer;
  border: none;
  background-color: #2b96ec;
  color: #fff;
`;

const PassengersSpan = styled.span`
  font-size: 15px;
`;

const PassengersGradesSelect = styled.div`
  display: flex;
  padding: 1.5em 0;
  justify-content: center;
`;

const PassengersGradesSelectUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 3em;
`;

const PassengersGradesSelectLi = styled.li`
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

const PassengersInputDiv = styled.div`
  font-size: 15px;
`;

const PassengersInput = styled.input`
  margin-right: 1em;
`;

export default Passengers;
