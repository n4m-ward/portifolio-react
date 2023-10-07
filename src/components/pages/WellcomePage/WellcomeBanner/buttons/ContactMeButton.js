import React from 'react';
import styled from 'styled-components';
import {translate} from '../../../../../translate';

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
  background: linear-gradient(180deg,
  #5aa6c5 0%,
  #5aa6c5 0.01%,
  rgba(90, 166, 197, 0.906341) 9.38%,
  rgba(213, 225, 229, 0) 100%),
  #ffffff;
  border: 1px solid #35476b;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
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
  font-style: normal;
  font-weight: bold;
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
