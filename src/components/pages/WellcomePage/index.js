import React from 'react';
import styled from 'styled-components';
import PageCard from '../PageCard';
import WellcomeBanner from './WellcomeBanner';
import WellcomeImage from './WellcomeImage';

function WellcomePage() {
  return (
    <PageCard>
      <FlexDiv>
        <WellcomeBanner />
        <WellcomeImage />
      </FlexDiv>
    </PageCard>
  );
}

export default WellcomePage;

const FlexDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 800px) {
    width: 100%;
    display: grid;
  }
`;
