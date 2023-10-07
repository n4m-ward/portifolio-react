import React from 'react';
import styled from 'styled-components';
import { translate } from '../../translate';

function LanguageSelector() {
  return (
    <Select>
      <SelectOption>{translate('languageSelector.portuguese')}</SelectOption>
      <SelectOption>{translate('languageSelector.english')}</SelectOption>
    </Select>
  );
}

export default LanguageSelector;

const Select = styled.select`
  width: 100px;
  height: 33px;
  background: #f2f2f2;
  border-radius: 10px;
  color: #b0aab0;
  bottom: 0;
  right: 0;
`;

const SelectOption = styled.option`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
`;
