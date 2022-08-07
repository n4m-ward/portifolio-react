import React from 'react';
import styled from 'styled-components';
import { UseColorPallete } from '../../hook/customHooks/UseCollorPallete';

function PageCard({ children, firstPage, display }) {
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

const GradientCard = styled.div`
  background: ${({ background }) => background};
  width: 100%;
  min-height: ${({ firstPage }) => (firstPage ? '90vh' : '100vh')};
  display: ${({ display }) => display || 'block'};
`;
