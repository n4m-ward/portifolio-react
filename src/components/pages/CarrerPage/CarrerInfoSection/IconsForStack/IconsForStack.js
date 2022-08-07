import React from 'react';
import styled from 'styled-components';
import { getStackIcons } from '../../../../../api/carrer';
import StackIconsCard from './StackIconsCard';
import type { StackIcons } from '../../../../../Types/StackIcons';

function IconsForStack() {
  const stackIcons = getStackIcons();
  return (
    <Root>
      {stackIcons.map((stackIcons: StackIcons, index: int) => (
        <StackIconsCard
          key={index}
          index={index}
          name={stackIcons.name}
          iconUrl={stackIcons.iconUrl}
          stackIcons={stackIcons.stackIcons}
        />
      ))}
    </Root>
  );
}

export default IconsForStack;

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  height: 200px;
  overflow-y: scroll;

  @media (max-width: 320px) {
    height: 400px;
  }
`;
