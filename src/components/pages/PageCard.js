import React from 'react';
import styled from 'styled-components';

function PageCard({ children }) {
  return <GradientCard>{children}</GradientCard>;
}

export default PageCard;

const GradientCard = styled.div`
  background: linear-gradient(
      180deg,
      rgba(106, 121, 150, 0.8) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #f2f2f2;
  width: 100%;
  min-height: 88vh;
`;
