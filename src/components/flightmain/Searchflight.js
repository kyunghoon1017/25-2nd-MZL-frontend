import React, { useState } from 'react';
import FlightSchedule from './FlightCalendar';
import styled from 'styled-components/macro';
import RouteTable from './RouteTable';
import Passengers from './Flightpassengers';
import { Link } from 'react-router-dom';

const Searchflight = () => {
  const [isModalOpen, setIsOpenModal] = useState(false);
  const [cities, setCities] = useState({ departure: '서울(SEL)', arrival: '' });
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [inputClicked, setInputClicked] = useState('');
  const [buttonModal, setButtonModal] = useState(false);
  const [passengers, setPassengers] = useState({ adult: 1, kid: 0, baby: 0 });
  const [seatType, setSeatType] = useState('');
  const [searchCity, setSearchCity] = useState('');

  const handleInputModal = e => {
    setInputClicked(e.target.name);
    setIsOpenModal(!isModalOpen);
  };

  const handleButtonModal = e => {
    if (e.target !== e.currentTarget) return;
    setButtonModal(!buttonModal);
  };

  const changeData = () => {
    setCities({ departure: cities.arrival, arrival: cities.departure });
  };

  const selectCity = e => {
    if (inputClicked === 'departure') {
      setCities({ ...cities, departure: e.target.innerText });
    } else {
      setCities({ ...cities, arrival: e.target.innerText });
    }
    setIsOpenModal(false);
  };

  const selectDates = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handlePassengers = () => {
    setPassengers();
  };

  const handleSeatType = e => {
    setSeatType(e.target.value);
  };

  const targetCity = e => {
    setSearchCity(e.target.value);
  };

  const searchCities = () => {
    if (inputClicked === 'departure' && searchCity.length >= 2) {
      setCities({ ...cities, departure: searchCity });
    } else {
      setCities({ ...cities, arrival: searchCity });
    }
    setIsOpenModal(false);
  };

  const countPassengers = e => {
    e.preventDefault();
    if (e.target.innerText === '+') {
      if (passengersTotal === 9) {
        alert('정원은 9명을 초과할 수 없습니다.');
        return;
      }
      setPassengers({ ...passengers, adult: passengers.adult + 1 });
    } else if (e.target.innerText === '-') {
      if (passengers.adult === 0) return;
      setPassengers({ ...passengers, adult: passengers.adult - 1 });
    }
  };

  const passengersTotal = Object.values(passengers).reduce(
    (acc, cur) => acc + cur
  );
  return (
    <SearchMain>
      <SearchHeaderul>
        <SelectList>
          <SelectorButton>왕복</SelectorButton>
          <SelectorButton>편도</SelectorButton>
          <SelectorButton>다구간</SelectorButton>
        </SelectList>
        <Reservationlist>
          <ReservationButton>항공권 예약내역</ReservationButton>
          <NotSignupButton>비회원 예약내역</NotSignupButton>
        </Reservationlist>
      </SearchHeaderul>
      <Journey>
        <Journeyul>
          <Journeyli>
            <JourneyLocation>
              <Journeyinput
                placeholder="출발지가 어디인가요?"
                name="departure"
                onClick={handleInputModal}
                value={cities.departure}
              />
              {isModalOpen ? (
                <RouteTable
                  handleModal={handleInputModal}
                  selectCity={selectCity}
                  targetCity={targetCity}
                  searchCity={searchCity}
                  searchCities={searchCities}
                />
              ) : (
                <RouteTableMainOFF />
              )}
              <JourneyButton onClick={changeData}>
                <i className="fas fa-arrows-alt-h" />
              </JourneyButton>
              <Journeyinput
                placeholder="도착지가 어딘가요?"
                name="arrival"
                onClick={handleInputModal}
                value={cities.arrival}
              />
            </JourneyLocation>
            <JourneyCalendar>
              <FlightSchedule
                startDate={startDate}
                selectDates={selectDates}
                endDate={endDate}
              />
            </JourneyCalendar>
            <ResevationButtonWrapper>
              <PassengerReservationButton onClick={handleButtonModal}>
                {buttonModal && (
                  <Passengers
                    passengers={passengers}
                    seatType={seatType}
                    handlePassengers={handlePassengers}
                    handleSeatType={handleSeatType}
                    countPassengers={countPassengers}
                  />
                )}
                <PassengerFontawesome>
                  <i className="far fa-user" />
                </PassengerFontawesome>
                승객 {passengersTotal}명, {seatType}
              </PassengerReservationButton>
            </ResevationButtonWrapper>
            <SearchButton
              to={{
                pathname: '/reservations',
                state: {
                  airport_depart: `${cities.departure}`,
                  airport_arrive: `${cities.arrival}`,
                },
              }}
            >
              검색
            </SearchButton>
          </Journeyli>
        </Journeyul>
      </Journey>
      <SearchBottom>
        <NonstopWrapper>
          <NonstopCheckbox type="checkbox" value="Y" />
          <label htmlFor="nonstop">
            <span>직항만</span>
          </label>
        </NonstopWrapper>
        <FreeOfChargeWrapper>
          <FreeOfChargebox type="checkbox" />
          <label htmlFor="freeOfCharge">
            <span>무료 수하물 가능</span>
          </label>
        </FreeOfChargeWrapper>
        <RouteWrapper>
          <span>
            | 출발/도착 다른 구간
            <i className="far fa-question-circle" />
          </span>
        </RouteWrapper>
      </SearchBottom>
    </SearchMain>
  );
};

const SearchMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchHeaderul = styled.ul`
  display: flex;
  align-items: center;
  gap: 39rem;
  margin: 1rem 0;
`;

const SelectList = styled.div`
  display: flex;
`;

const SelectorButton = styled.div`
  width: 6rem;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
`;

const ReservationButton = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
`;

const NotSignupButton = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
`;

const Reservationlist = styled.div`
  display: flex;
  gap: 1rem;
`;

const Journey = styled.div`
  display: flex;
`;

const Journeyul = styled.ul`
  display: flex;
`;

const Journeyli = styled.li`
  display: flex;
  align-items: center;
`;

const JourneyLocation = styled.div`
  border: 2px solid #f0f3f5;
`;

const Journeyinput = styled.input`
  border: none;
  text-align: center;
  font-size: 0.9rem;
  outline: none;
  padding: 0 2.3rem;
`;

const JourneyButton = styled.button`
  width: 3rem;
  height: 3rem;
  border: none;
  cursor: pointer;
`;

const JourneyCalendar = styled.div`
  display: flex;
`;

const PassengerReservationButton = styled.button`
  display: flex;
  margin-left: 0.9rem;
  font-size: 1rem;
  background-color: #fff;
  border: none;
  gap: 1rem;
  align-items: center;
  cursor: pointer;
`;

const SearchButton = styled(Link)`
  width: 5rem;
  height: 2.8rem;
  margin-left: 15px;
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  padding-top: 13px;
  color: white;
  background-color: #2b96ec;
  cursor: pointer;
`;

const SearchBottom = styled.section`
  display: flex;
  align-items: center;
  margin-top: 0.9rem;
  margin-right: 47rem;
`;

const NonstopWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  margin-right: 1em;
`;

const NonstopCheckbox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 0.5em;
`;

const FreeOfChargeWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  margin-right: 1em;
`;

const FreeOfChargebox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 0.5em;
`;

const RouteWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
`;

const PassengerFontawesome = styled.div`
  color: #2b96ec;
`;

const RouteTableMainOFF = styled.main`
  display: none;
`;

const ResevationButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #f0f3f5;
  margin-left: 1rem;
  width: 260px;
  height: 45px;
`;

export default Searchflight;
