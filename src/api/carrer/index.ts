import type {CarrerTimeLineItem} from '../../Types/CarrerTimeLineItem';
import type {StackIcons} from '../../Types/StackIcons';
import {translate} from "../../translate";

export const getCarrerTimeLine = (): Array<CarrerTimeLineItem> => {
    return [
        {
            role: translate('carer.companies.123milhas.role'),
            company: '123Milhas',
            date: 'Dez/2022 - Now',
            tags: ['PHP', 'Laravel', 'React', 'NodeJs', 'PHPUnit', 'Redis', 'Amazon SQS', 'Microserviços', 'PHPUnit', 'MySQL', 'DDD', 'TDD'],
            description: translate('carer.companies.123milhas.description')
        },
        {
            role: translate('carer.companies.objective.role'),
            company: 'EBANX/Objective',
            date: 'Mai/2022 - Dez/2022',
            tags: ['PHP', 'Laravel', 'React', 'Redis', 'PgSQL', 'PHPUnit', 'Jest', 'Cypress', 'DDD'],
            description: translate('carer.companies.objective.description'),
        },
        {
            role: translate('carer.companies.logcomex.role'),
            company: 'Logcomex',
            date: 'Fev/2021 - Mai/2022',
            tags: ['PHP', 'Laravel', 'Vue', 'Python', 'Javascript', 'Typescript', 'RabbitMQ', 'Amazon-SQS', 'Amazon-SNS', 'Redis'],
            description: translate('carer.companies.logcomex.description'),
        },
        {
            role: translate('carer.companies.freelancer.role'),
            company: 'Autonomo',
            date: 'Jan/2021 - Now',
            tags: ['PHP', 'Laravel', 'Vue', 'Node.js', 'MySQL', 'Knex.js'],
            description: translate('carer.companies.freelancer.description'),
        },
        {
            role: translate('carer.companies.teknisa.role'),
            company: 'Teknisa',
            date: 'Jan/2021 - Now',
            tags: ['PHP', 'Vue', 'Typescript', 'Pl/SQL'],
            description: translate('carer.companies.teknisa.description'),
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
