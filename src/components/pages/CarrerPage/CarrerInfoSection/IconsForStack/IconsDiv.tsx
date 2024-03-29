import React from 'react'
import styled from 'styled-components';
import type {Icon} from '../../../../../Types/Icons'

export default function IconsDiv({stackIcons}: { stackIcons: Icon[] }) {
    return (
        <MainDiv>
            <Divisor/>
            <Root>
                {stackIcons.map((icon: Icon) => (
                    <BaseIconSvg
                        src={icon.iconUrl}
                        alt={icon.name}
                    />
                ))}
            </Root>
        </MainDiv>
    )
}

const MainDiv = styled.div`
  width: 100%;
  height: 100px;
`
const Divisor = styled.div`
  width: 100%;
  height: 1px;
  background-color: #D3D3D3;
  box-shadow: 0 4px 10px -2px black;
`
const Root = styled.div`
  width: 100%;
  height: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #c4c4c4;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #c4c4c4;
  }
`

const BaseIconSvg = styled.img`
  width: 40px;
  margin: 0 auto;
  margin-bottom: 15px;
  @media (max-width: 500px) {
    width: 30px;
  }
`
