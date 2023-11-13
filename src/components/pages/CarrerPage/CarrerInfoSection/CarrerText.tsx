import React from 'react';
import styled from 'styled-components';
import { translate } from '../../../../translate';

function CarrerText() {
    return (
        <div>
            <h1>Carrer</h1>
            <CarrerTextContent>
                <p>
                  {translate('carer.introductionText')}
                </p>

                <p>
                    Em 2020 consegui minha primeira experiencia profissional onde sigo até
                    hoje, como <strong>desenvolvedor fullstack pleno</strong>, após ter
                    passado em contato com varias tecnologias, como: <br/>
                    PHP, Laravel, Node.js, Python, React, Vue.js, RabbitMQ, dentre outros.
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
