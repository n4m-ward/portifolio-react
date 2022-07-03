import React from 'react';
import styled from 'styled-components';
import ContactMeButton from './buttons/ContactMeButton';
import GetCvButton from './buttons/GetCvButton';

function WellcomeButtonSection() {
  return (
    <WellcomeButtonDiv>
      <GetCvButton />
      <ContactMeButton />
    </WellcomeButtonDiv>
  );
}

export default WellcomeButtonSection;

const WellcomeButtonDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;
