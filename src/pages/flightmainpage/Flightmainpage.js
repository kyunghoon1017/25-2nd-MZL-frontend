import React from 'react';
import styled from 'styled-components';
import SimpleSlider from '../../components/Advertisement/Advertisement';
import Searchflight from '../../components/flightmain/Searchflight';
import ProductList from '../../components/ProductList/ProductList';

const FlightMainPage = () => {
  return (
    <Flightmain>
      <Searchflight />
      <SimpleSlider />
      <Subtitle>세계 최저가 상품</Subtitle>
      <ProductList />
      <ProductList />
    </Flightmain>
  );
};

const Flightmain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 7rem;
`;

const Subtitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-right: 60rem;
`;

export default FlightMainPage;
