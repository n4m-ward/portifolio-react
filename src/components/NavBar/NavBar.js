import React from 'react';
import NavBarIcon from './NavBarIcon';
import styled from 'styled-components';
import { translate } from '../../translate';
import LinkSection from './LinkSection';
import ButtonSection from './ButtonSection';

function NavBar() {
  return (
    <Root>
      <InternalDiv>
        <NavBarIcon
          text={translate('navBar.navBarLogo')}
          fontSize={'30px'}
          fontWeight={400}
        />
        <MenuSection>
          <LinkSection />
          <ButtonSection />
        </MenuSection>
      </InternalDiv>
    </Root>
  );
}

export default NavBar;

const MenuSection = styled.section`
  display: flex;
  justify-content: space-between;
  height: 78px;
  width: 70%;

  @media (min-width: 1440px) {
    width: 60%;
  }

  @media (max-width: 780px) {
    width: 60%;
  }

  @media (max-width: 450px) {
    display: none;
  }
`;

const InternalDiv = styled.div`
  width: 98%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Root = styled.div`
  position: sticky;
  display: flex;
  justify-content: center;
  background-color: #35476b;
  width: 100%;
  height: 80px;
`;
