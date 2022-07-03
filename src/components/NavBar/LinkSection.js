import React from 'react';
import styled from 'styled-components';
import { translate } from '../../translate';
import NavBarIcon from './NavBarIcon';

function LinkSection() {
  return (
    <Root>
      <NavBarIcon text={translate('navBar.aboutMe')} />
      <NavBarIcon text={translate('navBar.projects')} />
      <NavBarIcon text={translate('navBar.contact')} />
    </Root>
  );
}

export default LinkSection;

const Root = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 780px) {
    width: 70%;
  }
`;
