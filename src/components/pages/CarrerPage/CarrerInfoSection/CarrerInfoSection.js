import React from 'react';
import styled from 'styled-components';
import CarrerText from './CarrerText';
import IconsForStack from './IconsForStack/IconsForStack';

function CarrerInfoSection() {
  return (
    <Root>
      <CarrerText />
      <IconsForStack />
    </Root>
  );
}

export default CarrerInfoSection;

const Root = styled.div`
  width: 40%;
  height: 500px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 500px) {
    width: 90%;
    margin-bottom: 50px;
  }
`;
