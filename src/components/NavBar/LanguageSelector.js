import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {translate} from '../../translate';

function LanguageSelector() {
    const [defaultLanguage, setDefaultLanguage] = useState('pt-BR');

    useEffect(() => {
        const language = localStorage.getItem('i18nextLng');
        if (language) {
            setDefaultLanguage(language)
        }
    }, []);

    function changeLanguage(language) {
        localStorage.setItem('i18nextLng', language);
        window.location.reload();
    }

    return (
        <Select onChange={(e) => changeLanguage(e.target.value)} value={defaultLanguage}>
            <SelectOption value='pt-BR'>{translate('languageSelector.portuguese')}</SelectOption>
            <SelectOption value='en-US'>{translate('languageSelector.english')}</SelectOption>
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
