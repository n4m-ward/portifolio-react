import React from 'react';
import styled from 'styled-components';
import LanguageSelector from './LanguageSelector';
import SwitchTheme from './SwitchTheme';

function ButtonSection() {
  return (
    <Root>
      <SwitchTheme />
      <LanguageSelector />
    </Root>
  );
}

export default ButtonSection;

const Root = styled.div`
  position: relative;
  display: grid;
  width: 50px;
  height: 70px;
`;
