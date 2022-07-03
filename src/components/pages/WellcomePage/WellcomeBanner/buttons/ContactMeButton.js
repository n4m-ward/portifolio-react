import React from 'react';
import styled from 'styled-components';
import { translate } from '../../../../../translate';

function ContactMeButton() {
  return (
    <ContactMeBtn>
      <ButtonTxt>{translate('wellcomePage.contact')}</ButtonTxt>
    </ContactMeBtn>
  );
}

export default ContactMeButton;

const ContactMeBtn = styled.button`
  cursor: pointer;
  width: 214px;
  height: 77px;
  background: linear-gradient(
      180deg,
      #1e2c47 0%,
      #f6e3f7 0.01%,
      rgba(139, 158, 197, 0) 100%
    ),
    #ffffff;
  border: 1px solid #35476b;
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
  font-size: 35px;
  line-height: 43px;
  color: #35476b;

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
