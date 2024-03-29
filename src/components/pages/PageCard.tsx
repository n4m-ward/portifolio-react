import React from 'react';
import styled from 'styled-components';
import {UseColorPallete} from '../../hook/customHooks/UseCollorPallete';

function PageCard({children, firstPage = false, display}: {
    children: JSX.Element,
    firstPage?: boolean,
    display?: string | null
}) {
    const background = UseColorPallete().MAIN_BACKGROUND_COLOR;
    return (
        <GradientCard
            background={background}
            firstPage={firstPage}
            display={display}
        >
            {children}
        </GradientCard>
    );
}

export default PageCard;

const GradientCard = styled.div<GradientCardInput>`
  background: ${({background}) => background};
  width: 100%;
  min-height: ${({firstPage}) => (firstPage ? '90vh' : '100vh')};
  display: ${({display}) => display || 'block'};
`;

type GradientCardInput = {
    background: string,
    firstPage?: boolean,
    display?: string | null
}