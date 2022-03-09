import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SelectFilter from './Filter/Filter';
import Flightschedule from '../../components/Flightschedule/Flightschedule';
import Ticket from './Ticket/Ticket';
import API from '../../config';
import Searchflight from '../../components/flightmain/Searchflight';

function Booking() {
  const [queryfilter, setqueryFilter] = useState([]);
  const [selectFlight, setSelectFlight] = useState([]);
  const [flights, setFlights] = useState([]);

  const handleFilter = useCallback(
    (query, isCheck) => {
      if (isCheck) {
        setqueryFilter(queryfilter => [...queryfilter, query]);
      } else if (!isCheck) {
        const isDef = queryfilter.filter(queryfilter => queryfilter !== query);
        setqueryFilter(isDef);
      }
    },
    [queryfilter]
  );

  useEffect(() => {
    fetch(`${API.reservations}?${queryfilter.join('')}airport_depart=김포`)
      .then(res => res.json())
      .then(res => setFlights(res.data));
  }, [queryfilter]);

  const getSelectFlight = ({ getSelectFlight, ...props }) => {
    setSelectFlight([...selectFlight, props]);
    if (setFlights.length === 1) {
      fetch(`${API.reservations}?${queryfilter.join('')}airport_depart=제주`, {
        method: 'GET',
      })
        .then(res => res.json())
        .then(res => setFlights(res.data));
    }
  };

  const isLength2 = selectFlight.length >= 2;
  const isLength1 = selectFlight.length >= 1;

  return (
    <BigContainer>
      <Searchflight />
      <SelectFlight>
        {selectFlight?.map(selected => (
          <Ticket key={selected.id} list={selected} />
        ))}
        {isLength2 ? (
          <Btn
            to={{
              pathname: '/cart',
              state: { selectFlight: selectFlight },
            }}
          >
            다음페이지로
          </Btn>
        ) : (
          ''
        )}
      </SelectFlight>
      {isLength2 ? (
        ''
      ) : (
        <Container>
          <SelectFilter handleFilter={handleFilter} />
          <Bookings>
            <FilterList>
              <FilterText>
                <Result>검색결과 총 {flights.length}개</Result>
                <Ex>성인 1인 기준 편도 요금입니다. (세금 및 수수료 포함)</Ex>
              </FilterText>
              <Sort>
                <option>가격 낮은 순</option>
                <option>출발 시간 빠른 순</option>
                <option>출발 시간 늦은 순</option>
              </Sort>
            </FilterList>
            <Data>
              <Direction>{isLength1 ? '오는편' : '가는편'}</Direction>
              <DirectionArea>
                {isLength1 ? '제주 - 김포' : '김포 - 제주'}
              </DirectionArea>
              <DirectionDate>
                {isLength1 ? '11월 2일(화)' : '11월 1일(월)'}
              </DirectionDate>
            </Data>
            <Filgths>
              {flights.map(flightList => (
                <Flightschedule
                  key={flightList.id}
                  id={flightList.id}
                  getSelectFlight={getSelectFlight}
                  airline={flightList.airline}
                  code={flightList.code}
                  logoImage={flightList.airline_logo}
                  departureTime={flightList.depart_time}
                  arriveTime={flightList.arrive_time}
                  airport_arrive_eng={flightList.airport_arrive}
                  airport_depart_eng={flightList.airport_depart}
                  seat={flightList.seat_class}
                  extraSeat={flightList.extraSeat}
                  price={flightList.flight_price}
                />
              ))}
            </Filgths>
          </Bookings>
        </Container>
      )}
    </BigContainer>
  );
}

export default Booking;

const BigContainer = styled.div``;

const SelectFlight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 50px;
`;

const Btn = styled(Link)`
  margin: 100px 0;
  padding: 20px 30px;
  border-radius: 5px;
  background-color: ${props => props.theme.subColor};
  color: white;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

const SearchList = styled.div`
  background-color: ${props => props.theme.subColor};
  height: 60px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 17px;
  background-color: ${props => props.theme.subBackground};
`;

const Bookings = styled.div`
  width: 40%;
`;

const FilterList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  margin-bottom: 10px;
`;

const FilterText = styled.div``;

const Result = styled.div`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 400;
`;

const Ex = styled.div`
  color: gray;
  font-size: 12px;
`;

const Sort = styled.select`
  width: 20%;
  padding: 10px 8px;
  border: 0.5px solid #d2d4d6;
  border-radius: 3px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  &:hover {
    border: 0.5px solid black;
  }
`;

const Data = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  height: 60px;
  margin-bottom: 10px;
  background-color: white;
  border-radius: 3px;
`;

const Direction = styled.span`
  padding: 5px 5px;
  margin-right: 10px;
  border: 0.5px solid ${props => props.theme.subColor};
  border-radius: 2px;
  color: ${props => props.theme.subColor};
  font-size: 13px;
  font-weight: 600;
`;

const DirectionArea = styled.span`
  margin-right: 1.5%;
  padding-top: 3px;
  font-size: 16px;
  font-weight: 500;
`;

const DirectionDate = styled.span`
  padding-top: 3px;
  font-size: 14px;
`;

const Filgths = styled.ul`
  width: 100%;
  padding-bottom: 50px;
`;
