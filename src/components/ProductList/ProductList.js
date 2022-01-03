import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components/macro';
import ProductCard from './ProductCard/ProductCard';

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
    height: 40px;
    width: 40px;
    left: -10px;
    border-radius: 50%;
    border: 1px solid #dee2e6;
    background-color: #fff;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 5%), 0 2px 6px 0 rgb(0 0 0 / 5%),
      0 4px 12px 0 rgb(0 0 0 / 5%);
    text-align: center;
    z-index: 10;

    :before {
    font-family: 'slick';
    font-size: 15px;
    color: black;
    vertical-align: middle;
}
    }
    :hover {
    }
  }
  .slick-next {
    width: 40px;
    height: 40px;
    right: -15px;
    border-radius: 50%;
    border: 1px solid #dee2e6;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 5%), 0 2px 6px 0 rgb(0 0 0 / 5%),
      0 4px 12px 0 rgb(0 0 0 / 5%);
    text-align: center;
    z-index: 10;

    :before {
      font-family: 'slick';
      font-size: 15px;
      color: black;
      vertical-align: middle;
}
    }
    :hover {
  
    }
`;

function ProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('data/ProductListData.json')
      .then(res => res.json())
      .then(data => {
        setProductList(data.product);
      });
  }, []);

  return (
    <SliderContainer>
              
      <Slider {...settings}>
        {productList.map(product => {
          return (
            <ProductCard
              key={product.id}
              img_url={product.img_url}
              category={product.category}
              title={product.title}
              star={product.star}
              review_count={product.review_count}
              original={product.original}
              discount={product.discount}
            />
          );
        })}
      </Slider>
            
    </SliderContainer>
  );
}

export default ProductList;
