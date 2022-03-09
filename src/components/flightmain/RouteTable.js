import React from 'react';
import styled from 'styled-components';

const RouteTable = ({
  selectCity,
  handleModal,
  targetCity,
  searchCity,
  searchCities,
}) => {
  return (
    <RouteTableMain>
      <SectionTitle>
        도시 선택 <i className="fas fa-times" onClick={handleModal} />
      </SectionTitle>
      <RouteTableSearchWrapper>
        <RouteTableInput
          placeholder="도시명을 입력하세요"
          onChange={targetCity}
          value={searchCity}
        />
        <RouteButton onClick={searchCities}>검색</RouteButton>
      </RouteTableSearchWrapper>
      <RouteSelectSection>
        <RouteSelectPtag>주요도시 바로 선택</RouteSelectPtag>
        <LocationTable onClick={selectCity}>
          <LocationTableTr>
            <th rowSpan="3">국내</th>
            <td>제주</td>
            <td>김포</td>
            <td>부산</td>
            <td>광주</td>
          </LocationTableTr>
          <LocationTableTr>
            <td>여수</td>
            <td>광주</td>
            <td>대구</td>
            <td>양양</td>
          </LocationTableTr>
          <LocationTableTr>
            <td>군산</td>
            <td>울산</td>
            <td>포항</td>
            <td>인천</td>
          </LocationTableTr>
          <LocationTableTr>
            <th rowSpan="2">아시아</th>
            <td>다낭</td>
            <td>방콕</td>
            <td>세부</td>
            <td>대만/타오위안</td>
          </LocationTableTr>
          <LocationTableTr>
            <td>코타키나발루</td>
            <td>나트랑/캄란</td>
            <td>싱가포르</td>
            <td>팡라오</td>
          </LocationTableTr>
          <LocationTableTr>
            <th>중국</th>
            <td>북경</td>
            <td>상해/푸동</td>
            <td>청도</td>
            <td>성도</td>
          </LocationTableTr>
          <LocationTableTr>
            <th rowSpan="2">일본</th>
            <td>도쿄/나리타</td>
            <td>도쿄/하네다</td>
            <td>오사카/간사이</td>
            <td>오키나와</td>
          </LocationTableTr>
          <LocationTableTr>
            <td>후쿠오카</td>
            <td>키타큐슈</td>
            <td>삿포로/치토세</td>
            <td>나고야</td>
          </LocationTableTr>
          <LocationTableTr>
            <th rowSpan="2">미주</th>
            <td>로스엔젤레스</td>
            <td>하와이/호놀룰루</td>
            <td>뉴욕</td>
            <td>토론토</td>
          </LocationTableTr>
          <LocationTableTr>
            <td>벤쿠버</td>
            <td>시카고/오헤어</td>
            <td>샌프란시스코</td>
            <td>라스베가스</td>
          </LocationTableTr>
          <LocationTableTr>
            <th rowSpan="2">유럽</th>
            <td>블라디보스토크</td>
            <td>파리</td>
            <td>런던</td>
            <td>로마</td>
          </LocationTableTr>
          <LocationTableTr>
            <td>프랑크푸르트</td>
            <td>프라하</td>
            <td>바르셀로나</td>
            <td>이스탄불</td>
          </LocationTableTr>
        </LocationTable>
      </RouteSelectSection>
    </RouteTableMain>
  );
};

const RouteTableMain = styled.main`
  position: absolute;
  background: #fff;
  margin-top: 0.9rem;
  z-index: 15;
`;

const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 2rem;
  gap: 37rem;
  cursor: pointer;
`;

const RouteTableSearchWrapper = styled.div`
  display: flex;
  border: 2px solid #f0f3f5;
  margin-bottom: 1.5rem;
  gap: 29rem;
`;

const RouteTableInput = styled.input`
  padding: 0.8rem 0.5rem;
  border: none;
  outline: none;
`;

const RouteButton = styled.button`
  border: none;
  outline: none;
  width: 4.2rem;
  height: 2.6rem;
  background-color: #2b96ec;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
`;

const LocationTable = styled.table`
  border-top: 2px solid #f0f3f5;
  line-height: 2.5;

  th {
    vertical-align: middle;
    font-weight: 600;
    padding: 0 2.5rem;
  }

  td {
    cursor: pointer;
    color: #343a40;
    padding: 0.2rem 1.5rem;
  }
`;

const LocationTableTr = styled.tr`
  border-bottom: 2px solid #f0f3f5;
  text-align: center;
`;

const RouteSelectSection = styled.section``;

const RouteSelectPtag = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export default RouteTable;
