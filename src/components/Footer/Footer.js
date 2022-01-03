import React from 'react';
import styled from 'styled-components';

const INTRO_LIST = ['소개', '회사소개', '채용', '공고'];
const PARTNERSHIP_LIST = [
  '파트너',
  '파트너 등록하기',
  'Affiliate 프로그램',
  '리얼파트너',
  '파트너 블로그',
];
const SUPPORTS_LIST = ['지원', '자주 묻는 질문', '최저가 보장제'];

const Footer = () => (
  <FooterContainer>
    <Service>
      <Tit>고객센터 운영안내</Tit>
      <ServiceDetail>
        <List>평일(채팅/유선) : 09:00-18:00 (12시~13시 제외)</List>
        <List>주말/공휴일 : 채팅 상담만 가능</List>
        <List>※ 항공권 환불/변경 : 09:00-17:00까지 접수 가능</List>
        <List>유선상담 : 1670-8208</List>
      </ServiceDetail>
      <OneToOne>1:1 채팅상담</OneToOne>
    </Service>
    <FooterR>
      <Intro>
        {INTRO_LIST.map((text, idx) => (
          <List key={idx}>{text}</List>
        ))}
      </Intro>
      <Partnership>
        {PARTNERSHIP_LIST.map((text, idx) => (
          <List key={idx}>{text}</List>
        ))}
      </Partnership>
      <Supports>
        {SUPPORTS_LIST.map((text, idx) => (
          <List key={idx}>{text}</List>
        ))}
      </Supports>
    </FooterR>
  </FooterContainer>
);

export default Footer;

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  gap: 29rem;
  border-top: 0.5px solid rgba(0, 0, 0, 0.09);
  padding-top: 1rem;
  height: 1rem;
`;

const Service = styled.div`
  display: flex;
  flex-direction: column;
`;

const Tit = styled.span`
  font-size: 17px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.6);
`;

const ServiceDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

const List = styled.span`
  margin-bottom: 6px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 13px;

  :nth-child(1) {
    font-size: 14px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.6);
  }
`;

const OneToOne = styled.div`
  display: flex;
  justify-content: center;
  width: 120px;
  padding: 13px 6px;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 1px 1px 2px rgba(0, 0, 0, 0.05);
  }
`;

const FooterR = styled.div`
  display: flex;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
`;

const Partnership = styled(Intro)``;

const Supports = styled(Intro)``;
