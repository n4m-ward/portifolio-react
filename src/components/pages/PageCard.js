import React from 'react';
import styled from 'styled-components';
import { UseColorPallete } from '../../hook/customHooks/UseCollorPallete';

function PageCard({ children }) {
  const background = UseColorPallete().MAIN_BACKGROUND_COLOR;
  return <GradientCard background={background}>{children}</GradientCard>;
}

export default PageCard;

const GradientCard = styled.div`
  background: ${({ background }) => background};
  width: 100%;
  min-height: 88vh;
`;
