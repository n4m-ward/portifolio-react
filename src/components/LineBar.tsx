import React from 'react';
import styled from 'styled-components';

function LineBar({color}: LineBarProps) {
    return <LineBarDiv color={color}/>;
}

export default LineBar;

type LineBarProps = {
    color: string,
}

const LineBarDiv = styled.div`
  width: 100%;
  height: 5px;
  background-color: ${({color}) => color};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
