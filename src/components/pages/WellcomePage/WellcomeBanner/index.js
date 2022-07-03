import React from 'react';
import styled from 'styled-components';
import WellcomeButtonSection from './WellcomeButtonSection';
import WellcomeMessageSection from './WellcomeMessageSection';

function WellcomeBanner() {
  return (
    <WellcomeSection>
      <WellcomeMessageSection />
      <WellcomeButtonDiv>
        <WellcomeButtonSection />
      </WellcomeButtonDiv>
    </WellcomeSection>
  );
}

export default WellcomeBanner;

const WellcomeButtonDiv = styled.div`
  @media (max-width: 780px) {
    display: none;
  }
`;

const WellcomeSection = styled.div`
  display: grid;
  width: 40%;
  height: 70%;

  @media (max-width: 800px) {
    width: 40%;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;
