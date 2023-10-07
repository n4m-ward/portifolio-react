import React from 'react';
import styled from 'styled-components';
import {translate} from '../../translate';
import NavBarIcon from './NavBarIcon';

function LinkSection() {
    return (
        <Root>
            <NavBarIcon text={translate('navBar.aboutMe')} fontWeight={'bold'}/>
            <NavBarIcon text={translate('navBar.projects')} fontWeight={'bold'}/>
            <NavBarIcon text={translate('navBar.contact')} fontWeight={'bold'}/>
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
