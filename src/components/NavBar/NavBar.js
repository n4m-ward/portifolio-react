import React, {useEffect, useState} from 'react';
import NavBarIcon from './NavBarIcon';
import styled from 'styled-components';
import {translate} from '../../translate';
import LinkSection from './LinkSection';
import ButtonSection from './ButtonSection';

function NavBar() {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 150) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Root className={scrolled ? 'scrolled' : ''}>
            <InternalDiv>
                <NavBarIcon
                    text={translate('navBar.navBarLogo')}
                    fontSize={'30px'}
                    fontWeight={'bold'}
                    scrolled={scrolled}
                />
                <MenuSection>
                    <LinkSection scrolled={scrolled}/>
                    <ButtonSection/>
                </MenuSection>
            </InternalDiv>
        </Root>
    );
}

export default NavBar;

const MenuSection = styled.section`
  display: flex;
  justify-content: space-between;
  height: 100%;
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
  place-items: center;
  position: sticky;
  display: flex;
  justify-content: center;
  background-color: #35476b;
  width: 100%;
  height: 10vh;
  top: 0;
  transition: background 0.3s ease;

  &.scrolled {
    background: transparent;
  }
`;
