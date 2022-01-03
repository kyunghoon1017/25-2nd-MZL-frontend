import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components/macro';
import MainCityCard from './MainCityCard';
import MAINCITYDATA from './MainCityData';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
};

const SliderContainer = styled.div`
  width: 1100px;
  .slick-prev {
    left: -20px;
    border-radius: 50%;
    border: 1px solid #dee2e6;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 5%), 0 2px 6px 0 rgb(0 0 0 / 5%),
      0 4px 12px 0 rgb(0 0 0 / 5%);
    height: 40px;
    text-align: center;
    width: 40px;
    z-index: 10;

    :before {
      font-family: 'slick';
      font-size: 15px;
      color: black;
      vertical-align: middle;
    }
  }

  .slick-next {
    right: 6px;
    border-radius: 50%;
    border: 1px solid #dee2e6;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 5%), 0 2px 6px 0 rgb(0 0 0 / 5%),
      0 4px 12px 0 rgb(0 0 0 / 5%);
    height: 40px;
    text-align: center;
    width: 40px;
    z-index: 10;

    :before {
      font-family: 'slick';
      font-size: 15px;
      color: black;
      vertical-align: middle;
    }
  }
`;

function MainCityList() {
  return (
    <SliderContainer>
      <Slider {...settings}>
        {MAINCITYDATA.map(city => {
          return (
            <MainCityCard
              key={city.id}
              img_url={city.img_url}
              title={city.title}
              product_count={city.product_count}
            />
          );
        })}
      </Slider>{' '}
            
    </SliderContainer>
  );
}

export default MainCityList;
