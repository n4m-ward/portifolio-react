import React from 'react';
import styled from 'styled-components';
import { translate } from '../../../../../translate';

function GetCvButton() {
  return (
    <CvButton>
      <ButtonTxt>{translate('wellcomePage.getCv')}</ButtonTxt>
    </CvButton>
  );
}

export default GetCvButton;

const CvButton = styled.button`
  width: 214px;
  height: 77px;
  cursor: pointer;
  background: linear-gradient(180deg, #2a3752 0%, rgba(150, 172, 217, 0) 100%),
    #35476b;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  @media (min-width: 2200px) {
    width: 400px;
    height: 150px;
  }

  @media (max-width: 450px) {
    width: 150px;
    height: 70px;
  }

  @media (max-width: 350px) {
    width: 130px;
    height: 60px;
  }
`;

const ButtonTxt = styled.span`
  font-family: 'Rowdies';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 43px;
  color: #ffedff;

  @media (min-width: 2200px) {
    font-size: 65px;
  }

  @media (max-width: 450px) {
    font-size: 30px;
  }

  @media (max-width: 350px) {
    font-size: 25px;
  }
`;
