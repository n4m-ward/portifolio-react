import React from 'react';
import styled from 'styled-components';
import LineBar from '../../../../LineBar';
import type { StackIcons } from '../../../../../Types/StackIcons';

function StackIconsCard({ index, iconUrl, stackIcons, name }: StackIcons) {
  return (
    <Card>
      <StackDiv>
        <img src={iconUrl} alt={name}/>
        <StackName>{name}</StackName>
      </StackDiv>
      <LineBar index={index} />
    </Card>
  );
}

export default StackIconsCard;

const Card = styled.div`
  width: 190px;
  height: 60px;
  margin: 20px;

  background: #e9e4e4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  cursor: pointer;

  &:hover {
    box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 1024px) {
    margin: 5px;
  }

  @media (max-width: 500px) {
    width: 190px;
  }

  @media (max-width: 450px) {
    width: 170px;
  }

  @media (max-width: 375px) {
    width: 150px;
  }

  @media (max-width: 320px) {
    width: 200px;
    margin: 0 auto;
    margin-bottom: 20px;
  }
`;
const StackDiv = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const StackName = styled.span`
  font-size: 25px;

  @media (max-width: 375px) {
    font-size: 20px;
  }

  @media (max-width: 320px) {
    font-size: 25px;
  }
`;
