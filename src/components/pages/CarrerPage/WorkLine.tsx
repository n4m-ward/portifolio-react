import React from 'react';
import styled from 'styled-components';
import {CarrerTimeLineItem} from "../../../Types/CarrerTimeLineItem";

export default function WorkLine({timeLine}: WorkLineProps) {
    function isTheLastItem(index: number) {
        return index + 1 === timeLine.length;
    }

    return (
        <WorkLineDiv>
            {timeLine.map((timeLineItem, index) => (
                <div key={index}>
                    <TimeLineVerticalBar index={index}/>
                    <WorkIcon src="work-icon.svg"/>
                    {isTheLastItem(index) && <TimeLineVerticalBar lastItem={true}/>}
                </div>
            ))}
        </WorkLineDiv>
    );
}

type WorkLineProps = {
    timeLine: CarrerTimeLineItem[],
}
type TimeLineVerticalBarProps = {
    index?: number,
    lastItem?: boolean
}
const TimeLineVerticalBar = styled.div<TimeLineVerticalBarProps>`
  margin: 0 auto;
  border-radius: 10px;

  width: 5px;
  height: ${({index, lastItem}) => {
    if (lastItem) return '55px';

    return index === 0 ? '115px' : '190px';
  }};

  background: #c4c4c4;
`;

const WorkLineDiv = styled.div`
  width: 30px;
  @media (max-width: 1000px) {
    margin-left: 20px;
  }
`;

const WorkIcon = styled.img`
  filter: invert(79%) sepia(1%) saturate(199%) hue-rotate(359deg) brightness(101%) contrast(91%);
  margin-top: 10px;
  margin-bottom: 10px;
  width: 30px;
`;
