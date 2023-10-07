import React, {useState} from 'react';
import styled from 'styled-components';
import {getCarrerTimeLine} from '../../../../api/carrer';
import CarrerCardDiv from './CarrerCardDiv';
import WorkLine from '../WorkLine';

function CarrerTimeLineSection() {
    const [timeLine, setTimeLine] = useState([]);
    const [timeLineLeft, setTimeLineLeft] = useState([]);
    const [timeLineRight, setTimeLineRight] = useState([]);

    React.useEffect(() => {
        const carrerTimeLine = getCarrerTimeLine();
        setTimeLine(carrerTimeLine);
        setTimeLineLeft(carrerTimeLine.filter((obj, key) => numberIsOdd(key + 1)));
        setTimeLineRight(
            carrerTimeLine.filter((obj, key) => !numberIsOdd(key + 1)),
        );
    }, []);

    function numberIsOdd(number) {
        return number % 2 !== 0;
    }

    return (
        <TimeLineSection>
            <DesktopDiv>
                <CarrerCardDiv
                    timeLine={timeLineLeft}
                    marginOnTop={false}
                    keyPrefix={'desktop_card_left'}
                />
                <WorkLine mobile={false} timeLine={timeLine} keyPrefix={'desktop'}/>
                <CarrerCardDiv
                    timeLine={timeLineRight}
                    marginOnTop={true}
                    keyPrefix={'desktop_card_right'}
                />
            </DesktopDiv>
            {/**diferent div that will display if user is in mobile browser */}
            <MobileDiv>
                <WorkLine mobile={false} timeLine={timeLine} keyPrefix={'mobile'}/>
                <CarrerCardDiv
                    timeLine={timeLine}
                    marginOnTop={false}
                    noMargin={true}
                    keyPrefix={'mobile_card'}
                />
            </MobileDiv>
        </TimeLineSection>
    );
}

export default CarrerTimeLineSection;

const DesktopDiv = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  overflow-y: auto;
  @media (max-width: 500px) {
    display: none;
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #c4c4c4;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #c4c4c4;
  }
`;

const MobileDiv = styled.div`

  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  overflow-y: auto;
  @media (min-width: 500px) {
    display: none;
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #c4c4c4;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #c4c4c4;
  }
`;

const TimeLineSection = styled.section`
  width: 50%;
  height: 700px;
  background: #ffffff;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  overflow-y: auto;

  @media (max-width: 900px) {
    width: 90%;
  }
`;
