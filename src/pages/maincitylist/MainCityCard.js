import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

function MainCityCard({ title, img_url, product_count }) {
  const history = useHistory();

  return (
    <Card>
      <BackgroundImg alt="City picture" src={img_url} />
      <Header>
        <Title>{title}</Title>
        <Description>{product_count} 여 개의 여행 상품</Description>
      </Header>
      <ButtonContainer onClick={() => history.push('/air')}>
        <LinkButton>둘러보기</LinkButton>
      </ButtonContainer>
    </Card>
  );
}

const Card = styled.div`
  position: relative;
  width: 250px;
  height: 333px;
  margin-right: 20px;
  border-radius: 8px;
  text-align: center;
  overflow: hidden;
`;

const BackgroundImg = styled.img`
  width: 250px;
  height: 333px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;

  :hover {
    transform: scale(1.3);
    transition-duration: 6s;
    transition-timing-function: ease-out;
    z-index: -1;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 32px;
  left: 24px;
  text-shadow: 0 1px 8px rgb(33 37 41 / 60%);
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 8px;
  margin-right: 8px;
  text-align: left;
  color: white;
`;

const Description = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: white;
  text-align: left;
`;

const ButtonContainer = styled.div`
  position: absolute;
  background-color: white;
  padding: 12px 16px 0 16px;
  border-radius: 4px;
  left: 24px;
  bottom: 28px;
  height: 40px;
  cursor: pointer;
`;

const LinkButton = styled.div`
  font-size: 14px;
  font-weight: 700;
  background-color: #fff;
  color: #495056;
`;

export default MainCityCard;
