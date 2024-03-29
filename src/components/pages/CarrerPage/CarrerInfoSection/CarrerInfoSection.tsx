import React from 'react';
import styled from 'styled-components';
import CarrerText from './CarrerText';
import IconsForStack from './IconsForStack/IconsForStack';
import {FONT_FAMMILY} from "../../../../colorPallet";

function CarrerInfoSection() {
    return (
        <Root>
            <CarrerText/>
            <IconsForStack/>
        </Root>
    );
}

export default CarrerInfoSection;

const Root = styled.div`
  width: 40%;
  min-height: 500px;
  font-family: ${FONT_FAMMILY};

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 900px) {
    width: 90%;
    margin-bottom: 50px;
  }
`;
