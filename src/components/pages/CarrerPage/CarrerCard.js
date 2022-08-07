import React from 'react';
import styled from 'styled-components';
import LineBar from '../../LineBar';
import { LINES } from '../../../colorPallet/lines.enum';

function CarrerCard({
  role,
  company,
  tags,
  date,
  description,
  marginOnTop,
  index,
  noMargin,
}) {
  return (
    <Card marginOnTop={marginOnTop} noMargin={noMargin}>
      <InternalCardDiv>
        <CarrerDiv>
          <CarrerText>{role}</CarrerText>
          <SecondText>{company}</SecondText>
        </CarrerDiv>
        <SeeMoreDiv>
          <SecondText>{date}</SecondText>
          <SeeMoreButton>Ver mais</SeeMoreButton>
        </SeeMoreDiv>
      </InternalCardDiv>
      <LineBar color={getLineColorByIndex(index, marginOnTop, noMargin)} />
    </Card>
  );
}

export default CarrerCard;

const cardHeigth = 180;

function getCardMargin(marginOnTop, noMargin) {
  const margin = marginOnTop ? 'margin-top' : 'margin-bottom';

  if (noMargin) return `${margin}: 20px`;

  return `${margin}: ${cardHeigth + 10}px`;
}

function getLineColorByIndex(index, marginOnTop, noMargin) {
  const numberToFindInArray = numberIsOdd(index + 1) ? 0 : 1;

  if (noMargin) return LINES[index];

  const colorLinesArrayFilteredByCardDivPosition = LINES.filter((item, index) =>
    marginOnTop ? !numberIsOdd(index + 1) : numberIsOdd(index + 1),
  );

  return colorLinesArrayFilteredByCardDivPosition[numberToFindInArray];
}

function numberIsOdd(number) {
  return number % 2 !== 0;
}

const CarrerDiv = styled.div`
  height: 42px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SeeMoreDiv = styled.div`
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

const SeeMoreButton = styled.button`
  width: 98px;
  height: 38px;
  color: #337cd1;
  font-family: 'Rowdies';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  background: #fffcfc;
  border: 1px solid #6b7177;
  border-radius: 30px;

  cursor: pointer;

  &:hover {
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.25);
  }
`;

const SecondText = styled.span`
  font-family: 'Rowdies';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  color: #b0aab0;
`;

const CarrerText = styled.h4`
  margin: 0px;
  font-family: 'Rowdies';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`;

const InternalCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 210px;
  height: 140px;
  margin: 20px;
`;

const Card = styled.div`
  ${({ marginOnTop, noMargin }) => getCardMargin(marginOnTop, noMargin)};
  box-sizing: border-box;

  width: 250px;
  height: ${cardHeigth}px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: #fffcfc;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
`;
