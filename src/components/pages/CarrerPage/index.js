import React from 'react';
import styled from 'styled-components';
import PageCard from '../PageCard';
import CarrerInfoSection from './CarrerInfoSection/CarrerInfoSection';
import CarrerTimeLineSection from './CarrerTimeLine/CarrerTimeLineSection';

function CarrerPage() {
    return (
        <PageCard>
            <InternalDiv>
                <CarrerTimeLineSection/>
                <CarrerInfoSection/>
            </InternalDiv>
        </PageCard>
    );
}

export default CarrerPage;

const InternalDiv = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;
