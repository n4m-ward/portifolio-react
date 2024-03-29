import React from 'react';
import styled from 'styled-components';
import {FONT_FAMMILY} from "../../colorPallet";

function NavBarIcon({fontSize, fontWeight, text, scrolled}) {
    return (
        <Root fontSize={fontSize} fontWeight={fontWeight} scrolled={scrolled}>
            {text}
        </Root>
    );
}

export default NavBarIcon;

const Root = styled.span`
  font-family: ${FONT_FAMMILY};
  font-size: ${({fontSize}) => fontSize || '20px'};
  font-weight: ${({fontWeight}) => fontWeight};
  line-height: 50px;
  letter-spacing: 0;
  text-align: left;
  color: ${(p) => p.scrolled ? '#35476B' : '#ffedff'};
`;
