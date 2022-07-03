import React from 'react';
import styled from 'styled-components';
import WellcomeButtonSection from './WellcomeBanner/WellcomeButtonSection';

function WellcomeImage() {
  return (
    <MainDiv>
      <WellcomeImageSection src="wellcomeIcon.svg" />
      <WellcomeButtonDiv>
        <br />
        <WellcomeButtonSection />
      </WellcomeButtonDiv>
    </MainDiv>
  );
}

export default WellcomeImage;

const WellcomeButtonDiv = styled.div`
  @media (min-width: 780px) {
    display: none;
  }
`;

const MainDiv = styled.div`
  width: 40%;
  height: 75%;

  @media (min-width: 2200px) {
    width: 800px;
  }

  @media (max-width: 800px) {
    width: 100%;
  }

  @media (max-width: 450px) {
    margin-top: 20px;
  }
`;

const WellcomeImageSection = styled.img`
  margin-top: 20px;
  width: 100%;
  height: 75%;

  @media (min-width: 2200px) {
    width: 800px;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;
