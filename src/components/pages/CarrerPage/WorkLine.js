import React from 'react';
import styled from 'styled-components';

function WorkLine({timeLine, keyPrefix}) {
    function isTheLastItem(index) {
        return index + 1 === timeLine.length;
    }

    return (
        <WorkLineDiv>
            {timeLine.map((timeLineItem, index) => (
                <>
                    <TimeLineVerticalBar index={index} key={keyPrefix + index}/>
                    <WorkIcon src="work-icon.svg" key={'workline_' + index}/>
                    {isTheLastItem(index) && <TimeLineVerticalBar lastItem={true}/>}
                </>
            ))}
        </WorkLineDiv>
    );
}

export default WorkLine;

const TimeLineVerticalBar = styled.div`
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
