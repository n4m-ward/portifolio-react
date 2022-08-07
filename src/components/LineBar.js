import React from 'react';
import styled from 'styled-components';
import { LINES } from '../colorPallet/lines.enum';

function LineBar({ color, index }) {
  return <LineBarDiv color={color || getColorByIndex(index)} />;
}

function getColorByIndex(index) {
  const lineArrayPosition = getLineArrayPosition(index);

  return LINES[lineArrayPosition];
}

function getLineArrayPosition(index) {
  if (index < 4) {
    return index;
  }

  return index % 4;
}

export default LineBar;

const LineBarDiv = styled.div`
  width: 100%;
  height: 5px;
  background-color: ${({ color }) => color};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
