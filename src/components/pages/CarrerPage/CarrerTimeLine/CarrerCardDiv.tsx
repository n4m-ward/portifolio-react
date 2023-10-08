import React from 'react';
import styled from 'styled-components';
import CarrerCard from './CarrerCard';
import type {CarrerTimeLineItem} from "../../../../Types/CarrerTimeLineItem";

function CarrerCardDiv({timeLine, marginOnTop, noMargin, keyPrefix}: CarrerCardInput) {
    return (
        <CardDiv>
            {timeLine.map((timeLineItem: CarrerTimeLineItem, index: number) => (
                <CarrerCard
                    key={keyPrefix + index}
                    index={index}
                    role={timeLineItem.role}
                    company={timeLineItem.company}
                    marginOnTop={marginOnTop}
                    date={timeLineItem.date}
                    noMargin={noMargin}
                    description={timeLineItem.description}
                    tags={timeLineItem.tags}
                />
            ))}
        </CardDiv>
    );
}

const CardDiv = styled.div`
  margin: 20px;
`;

type CarrerCardInput = {
    timeLine: CarrerTimeLineItem[],
    marginOnTop: boolean,
    noMargin?: boolean,
    keyPrefix: string
}


export default CarrerCardDiv;
