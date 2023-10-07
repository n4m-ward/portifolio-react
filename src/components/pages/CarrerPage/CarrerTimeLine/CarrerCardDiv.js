import React from 'react';
import styled from 'styled-components';
import type { CarrerTimeLineItem } from '../../../../api/carrer';
import CarrerCard from './CarrerCard';

function CarrerCardDiv({ timeLine, marginOnTop, noMargin, keyPrefix }) {
  return (
    <CardDiv>
      {timeLine.map((timeLineItem: CarrerTimeLineItem, index: int) => (
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

export default CarrerCardDiv;
