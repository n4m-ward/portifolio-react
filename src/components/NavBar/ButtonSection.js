import React from 'react';
import styled from 'styled-components';
import LanguageSelector from './LanguageSelector';

function ButtonSection() {
    return (
        <Root>
            {/*<SwitchTheme /> todo: descomentar depois quando tiver um dark theme mais robusto*/}
            <LanguageSelector/>
        </Root>
    );
}

export default ButtonSection;

const Root = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100%;
`;
