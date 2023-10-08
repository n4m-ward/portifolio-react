import React from 'react';
import styled from 'styled-components';
import {getStackIcons} from '../../../../../api/carrer';
import StackIconsCard from './StackIconsCard';
import type {StackIcons} from '../../../../../Types/StackIcons';

function IconsForStack() {
    const stackIcons = getStackIcons();
    return (
        <Root>
            {stackIcons.map((stackIcons: StackIcons, index: number) => (
                <StackIconsCard
                    key={index}
                    index={index}
                    stackIcons={stackIcons}
                />
            ))}
        </Root>
    );
}

export default IconsForStack;

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 200px;

  @media (max-width: 900px) {
    width: 100%;
    align-self: center;
  }

  @media (max-width: 320px) {
    height: 400px;
  }
`;
