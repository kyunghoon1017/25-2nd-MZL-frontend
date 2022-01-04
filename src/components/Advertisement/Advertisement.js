import React from 'react';
import { useHistory } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplayspeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  centermode: true,
};

const SliderWrap = styled.div`
  width: 1080px;

  img {
    border-radius: 5px;
    cursor: pointer;
  }

  .slick-prev {
    left: 20px;
    z-index: 1;
    width: 35px;
    height: 35px;
    border-radius: 50%;

    :before {
      font-family: 'slick';
      font-size: 40px;
      line-height: 1;
      opacity: 0.1;
      color: #000000;
    }

    :hover {
      background-color: #f2f2f2;
    }
  }

  .slick-next {
    right: 20px;
    width: 35px;
    height: 35px;
    border-radius: 50%;

    :before {
      font-family: 'slick';
      font-size: 40px;
      line-height: 1;
      opacity: 0.1;
      color: #000000;
    }

    :hover {
      background-color: #f2f2f2;
    }
  }
`;

const ImageLists = [
  { id: 0, src: '/images/11.png' },
  { id: 1, src: '/images/13.png' },
  { id: 2, src: '/images/14.png' },
  { id: 3, src: '/images/15.png' },
  { id: 4, src: '/images/16.png' },
];

const SimpleSlider = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/air');
  };

  return (
    <SliderWrap>
      <Slider {...settings}>
        {ImageLists.map(images => (
          <img key={images.id} alt="!" src={images.src} onClick={handleClick} />
        ))}
      </Slider>
    </SliderWrap>
  );
};

export default SimpleSlider;
