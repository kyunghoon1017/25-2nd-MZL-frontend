import React from 'react';
import styled from 'styled-components';
import SimpleSlider from '../../components/Advertisement/Advertisement';
import MainCityList from '../maincitylist/MainCityList';
import ProductList from '../../components/ProductList/ProductList';

const Main = () => {
  return (
    <MainPage>
      <TitleWrapper>
        <MainTitle>어디로 떠나세요?</MainTitle>
        <MainCityList />
        <SimpleSlider />
      </TitleWrapper>
      <SubWrapper>
        <SubTitle>위코더가 보면 좋을 상품</SubTitle>
        <ProductList />
        <SubTitle>25기가 보면 좋을 상품</SubTitle>
        <ProductList />
      </SubWrapper>
    </MainPage>
  );
};

const MainPage = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 2rem;
`;

const MainTitle = styled.span`
  font-size: 1.7rem;
  font-weight: bold;
  margin-top: 2rem;
`;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin: 2rem 0;
`;

const SubTitle = styled.span`
  font-size: 1.7rem;
  font-weight: bold;
`;

export default Main;
