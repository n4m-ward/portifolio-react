import React from 'react';
import styled from 'styled-components';
import { UseColorPallete } from "../../../../hook/customHooks/UseCollorPallete";

function WellcomeMessageSection() {
    const color = UseColorPallete().SECOND_TEXT_COLOR
  return (
    <MessageSection color={color}>
      <FirstMessageDiv>
        <MediumMessage >Hello World</MediumMessage>
        <Underscore>_________________________</Underscore>
      </FirstMessageDiv>
      <PrincipalMessage>I AM GABRIEL LIMA</PrincipalMessage>
      <MediumMessage style={{ marginTop: -25 }}>
        Full Stack Developer
      </MediumMessage>
    </MessageSection>
  );
}

export default WellcomeMessageSection;

const MessageSection = styled.section`
  width: 100%;
  height: 30%;
  color: ${props => props.color}
`;

const Underscore = styled.h3`
  transform: translateY(-10px);
  margin-left: 10px;

  @media (min-width: 2200px) {
    transform: translateY(-35px);
    font-size: 32px;
  }

  @media (max-width: 780px) {
    font-size: 32px;
    margin-left: 2px;
  }

  @media (max-width: 450px) {
    font-size: 15px;
    margin-left: 2px;
  }

  @media (max-width: 350px) {
    font-size: 12px;
    margin-left: 2px;
  }
`;

const MediumMessage = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;

  @media (min-width: 2200px) {
    font-size: 70px;
  }

  @media (max-width: 780px) {
    font-size: 32px;
  }

  @media (max-width: 450px) {
    font-size: 20px;
    margin-left: 2px;
  }

  @media (max-width: 350px) {
    font-size: 18px;
    margin-left: 2px;
  }
`;
const PrincipalMessage = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  margin-top: -20px;

  @media (min-width: 2200px) {
    font-size: 90px;
  }

  @media (max-width: 780px) {
    font-size: 48px;
  }

  @media (max-width: 450px) {
    font-size: 28px;
    margin-left: 2px;
  }
`;

const FirstMessageDiv = styled.div`
  display: flex;
  align-items: flex-end;
`;
