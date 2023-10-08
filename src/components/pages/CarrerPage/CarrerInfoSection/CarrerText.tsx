import React from 'react';
import styled from 'styled-components';

function CarrerText() {
    return (
        <div>
            <h1>Carrer</h1>
            <CarrerTextContent>
                <p>
                    Sou apaixonado por tecnologia, tive meu primeiro acesso a programação
                    em 2013 apos criar e dar manutenção em servidores de tibia feitos em
                    lua e PHP durante pouco mais de um ano
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
