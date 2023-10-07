// @flow

import type {CarrerTimeLineItem} from '../../Types/CarrerTimeLineItem';
import type {StackIcons} from '../../Types/StackIcons';

export const getCarrerTimeLine = (): Array<CarrerTimeLineItem> => {
    return [
        {
            role: 'Desenvolvedor Backend Pleno',
            company: '123Milhas',
            date: 'Dez/2022 - Now',
            tags: ['PHP', 'Laravel', 'React', 'NodeJs', 'PHPUnit', 'Redis', 'Amazon SQS', 'Microserviços', 'PHPUnit', 'MySQL', 'DDD', 'TDD'],
            description: `- Desenvolvimeno e manuenção em aplicação backend feita em laravel + mysql.
- Integração com Gateways de pagamento
- Definição de arquitetura, implemenação de cultura de testes unitarios
- Testes unitarios em aplicações laravel utilizando PHPUnit, Pest
- Jobs de alto desempenho usando sqs
- Integração com ci/cd, pipeline de testes/deploy no k8s`,
        },
        {
            role: 'Desenvolvedor PHP Pleno',
            company: 'EBANX/Objective',
            date: 'Mai/2022 - Dez/2022',
            tags: ['PHP', 'Laravel', 'React'],
            description: `- Prestando consultoria ao EBANX
- Integração com Gateways de pagamento
- Desenvolvimento e manutenção em sistemas com frontend feito em React, criando testes unitários com Jest e testes de integração com cypress.
- Backend feito em PHP, utilizando DDD como metodologia de desenvolvimento, com testes unitários e de integração feitos com Jest.
- CI/CD.`,
        },
        {
            role: 'Engenheiro de Software',
            company: 'Logcomex',
            date: 'Fev/2021 - Mai/2022',
            tags: ['PHP', 'Laravel', 'Vue', 'Python', 'RabbitMQ'],
            description: `- Desenvolvimento e manutenção de sistemas com frontend feito em Vue + Nuxt.js e Typescript. 
Backend feito em Laravel + php, e banco de dados pgsql.
- Refatoração de um monólito feito em laravel para uma arquitetura de microserviços, utilizando Rabbitmq + Lumen.
- Criação de lambda functions na aws Feito com python + auroraDB postgre plugado a um SQS e SNS
- Testes unitários no frontend usando Jest.
- Testes unitários para aplicações php usando PHPunit.
- Testes unitários em aplicações python utilizando pytest`,
        },
        {
            role: 'Dev freelancer Full-stack',
            company: 'Autonomo',
            date: 'Jan/2021 - Now',
            tags: ['PHP', 'Laravel', 'Vue'],
            description: `- Desenvolvimento de software
- Criação de um Sistema de gestão 
- Javascript, Node, Vue.js
- Banco de Dados Mysql`,
        },
        {
            role: 'Estagiario de programação',
            company: 'Teknisa',
            date: 'Jan/2021 - Now',
            tags: ['PHP', 'Laravel', 'Vue'],
            description: `- Implantação de novas funcionalidades
- Desenvolvimento de software
- PHP, Javascript, Typescript, Json, Vue
- Banco de Dados Oracle SQL Developer`,
        },
    ];
};

export const getStackIcons = (): Array<StackIcons> => {
    return [
        {
            name: 'Front-end',
            iconUrl: 'carrer/frontend_icon.svg',
            stackIcons: [
                {
                    name: 'Flutter',
                    iconUrl: './icons/frontend/flutter_icon.svg'
                },
                {
                    name: 'Jest',
                    iconUrl: './icons/frontend/jest_icon.svg'
                },
                {
                    name: 'JavaScript',
                    iconUrl: './icons/frontend/js_icon.svg'
                },
                {
                    name: 'NuxtJs',
                    iconUrl: './icons/frontend/nuxtjs-icon.svg'
                },
                {
                    name: 'React',
                    iconUrl: './icons/frontend/react_icon.svg'
                },
                {
                    name: 'Typescript',
                    iconUrl: './icons/frontend/ts_icon.svg'
                },
                {
                    name: 'VueJs',
                    iconUrl: './icons/frontend/vuejs_icon.svg'
                },
            ],
        },
        {
            name: 'Back-end',
            iconUrl: 'carrer/backend_icon.svg',
            stackIcons: [
                {
                    name: 'Laravel',
                    iconUrl: './icons/backend/laravel_icon.svg'
                },
                {
                    name: 'NodeJs',
                    iconUrl: './icons/backend/nodejs_icon.svg'
                },
                {
                    name: 'PHP',
                    iconUrl: './icons/backend/php_icon.svg'
                },
                {
                    name: 'PHPUnit',
                    iconUrl: './icons/backend/phpunit2_icon.svg'
                },
                {
                    name: 'Python_icon',
                    iconUrl: './icons/backend/python_icon.svg'
                },
                {
                    name: 'Rabbitmq_icon',
                    iconUrl: './icons/backend/rabbitmq_icon.svg'
                },
            ],
        },
        {
            name: 'Database',
            iconUrl: 'carrer/database_icon.svg',
            stackIcons: [
                {
                    name: 'Firebase',
                    iconUrl: './icons/database/firebase_icon.svg'
                },
                {
                    name: 'MongoDB',
                    iconUrl: './icons/database/mongodb_icon.svg'
                },
                {
                    name: 'MySQL',
                    iconUrl: './icons/database/mysql_icon.svg'
                },
                {
                    name: 'PgSQL',
                    iconUrl: './icons/database/pgsql_icon.svg'
                },
            ],
        },
        {
            name: 'Dev-Ops',
            iconUrl: 'carrer/devops_icon.svg',
            stackIcons: [
                {
                    name: 'Api Gateway',
                    iconUrl: './icons/devops/aws-api-gateway_icon.svg'
                },
                {
                    name: 'Lambda function',
                    iconUrl: './icons/devops/aws-lambda-icon.svg'
                },
                {
                    name: 'Sns',
                    iconUrl: './icons/devops/aws-sns_icon.svg'
                },
                {
                    name: 'Sqs',
                    iconUrl: './icons/devops/aws-sqs_icon.svg'
                },
                {
                    name: 'Docker',
                    iconUrl: './icons/devops/docker_icon.svg'
                },
                {
                    name: 'Github Actions',
                    iconUrl: './icons/devops/github_actions.svg'
                },
                {
                    name: 'Terraform',
                    iconUrl: './icons/devops/terraform.svg'
                },
            ],
        },
    ];
};
