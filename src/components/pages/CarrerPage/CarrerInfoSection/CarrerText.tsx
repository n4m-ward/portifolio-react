import React from 'react';
import styled from 'styled-components';
import {translate} from "../../../../translate";

function CarrerText() {
    return (
        <div>
            <h1>Carer</h1>
            <CarrerTextContent>
                <p>{translate('carer.description.introductionText')}</p>
                <p>
                    {translate('carer.description.carerDescription')}
                </p>
            </CarrerTextContent>
        </div>
    );
}

export default CarrerText;

const CarrerTextContent = styled.span`
  color: #6a737d;
  font-weight: bold;
`;
