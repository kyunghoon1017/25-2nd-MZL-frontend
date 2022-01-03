// const IP = 'http://10.58.6.180:8000';
const IP = 'http://localhost:3000';

const API = {
  login: `${IP}/users/login`, //로그인페이지
  products: `${IP}/menus/subproduct`, //상품리스트 (별점있는상품리스트)
  reservations: `${IP}/reservations`, //예약페이지(도착&출발,날짜,승객수,항공사,좌석)
  payments: `${IP}/payments/payment`, // payments/payment?depa-air={가는편 비행기 id값}&arri-air={오는편 비행기 id값}
};

export default API;
