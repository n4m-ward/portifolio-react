import React, {useState} from 'react';
import styled from 'styled-components';
import LineBar from '../../../LineBar';
import {LINES} from '../../../../colorPallet/lines.enum';
import CarerTags from "./CarerTags";
import {FONT_FAMMILY} from "../../../../colorPallet";
import {translate} from "../../../../translate";

function CarrerCard({
                        role,
                        company,
                        tags,
                        date,
                        description,
                        marginOnTop,
                        index,
                        noMargin,
                    }: CarrerCardType) {
    const [seeMore, setSeeMore] = useState(false);

    return (
        <Card marginOnTop={marginOnTop} noMargin={noMargin}>
            <InternalCardDiv>
                <CarrerDiv>
                    <CarrerText>{role}</CarrerText>
                    <SecondText>{company}</SecondText>
                </CarrerDiv>
                <SeeMoreDiv>
                    <SecondText>{date}</SecondText>
                    <SeeMoreButton
                        onClick={() => setSeeMore(!seeMore)}>{translate('carer.butons.seeMore')}</SeeMoreButton>
                </SeeMoreDiv>
            </InternalCardDiv>
            {seeMore &&
                <CarrerDescriptionDiv>
                    <CarrerTextDescription>
                        {description}
                    </CarrerTextDescription>
                </CarrerDescriptionDiv>
            }
            <CarerTags tags={tags} showAll={seeMore}/>
            <LineBar color={getLineColorByIndex(index, marginOnTop, noMargin)}/>
        </Card>
    );
}

export default CarrerCard;

type CarrerCardType = {
    role: string,
    company: string,
    tags: string[],
    date: string,
    description: string,
    marginOnTop: boolean,
    noMargin?: boolean,
    index: number
}

const cardHeigth = 233;

function getCardMargin(marginOnTop: boolean, noMargin?: boolean) {
    const margin = marginOnTop ? 'margin-top' : 'margin-bottom';

    if (noMargin) return `${margin}: 20px`;

    return `${margin}: ${cardHeigth + 10}px`;
}

export function getLineColorByIndex(index: number, marginOnTop: boolean, noMargin?: boolean) {
    const numberToFindInArray = numberIsOdd(index + 1) ? 0 : 1;

    if (noMargin) return LINES[index];

    const colorLinesArrayFilteredByCardDivPosition = LINES.filter((item, index) =>
        marginOnTop ? !numberIsOdd(index + 1) : numberIsOdd(index + 1),
    );

    return colorLinesArrayFilteredByCardDivPosition[numberToFindInArray];
}

function numberIsOdd(number: number) {
    return number % 2 !== 0;
}

type CardProps = {
    marginOnTop: boolean,
    noMargin?: boolean
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
  font-style: normal;
  font-size: 15px;
  line-height: 19px;
  color: #b0aab0;
  font-weight: bold;
  font-family: ${FONT_FAMMILY};
`;

const CarrerText = styled.h4`
  margin: 0;
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  font-weight: bold;
`;

const InternalCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 210px;
  height: 140px;
  margin: 20px;
`;

const Card = styled.div<CardProps>`
  font-family: ${FONT_FAMMILY};
  ${({marginOnTop, noMargin}) => getCardMargin(marginOnTop, noMargin)};
  box-sizing: border-box;

  width: 250px;
  min-height: ${cardHeigth}px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: #fffcfc;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
`;

const CarrerDescriptionDiv = styled.div`
  padding: 10px;
`

const CarrerTextDescription = styled.span`
  color: #6a737d;
  white-space: pre-wrap;
`;