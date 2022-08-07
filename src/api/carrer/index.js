// @flow
import type { CarrerTimeLineItem } from '../../Types/CarrerTimeLineItem';
import type { StackIcons } from '../../Types/StackIcons';

export const getCarrerTimeLine = (): Array<CarrerTimeLineItem> => {
  return [
    {
      role: 'Desenvolvedor PHP pleno',
      company: 'Objective',
      date: 'Jan/2021 - Now',
      tags: ['PHP', 'Laravel', 'React'],
      description: 'teste',
    },
    {
      role: 'Engenheiro de software',
      company: 'Logcomex',
      date: 'Jan/2021 - Now',
      tags: ['PHP', 'Laravel', 'Vue', 'Python', 'RabbitMQ'],
      description: 'teste',
    },
    {
      role: 'Dev freelancer Full-stack',
      company: 'Autonomo',
      date: 'Jan/2021 - Now',
      tags: ['PHP', 'Laravel', 'Vue'],
      description: 'teste',
    },
    {
      role: 'Estagiario de programação',
      company: 'Teknisa',
      date: 'Jan/2021 - Now',
      tags: ['PHP', 'Laravel', 'Vue'],
      description: 'teste',
    },
  ];
};

export const getStackIcons = (): Array<StackIcons> => {
  return [
    {
      name: 'Front-end',
      iconUrl: 'carrer/frontend_icon.svg',
      stackIcons: [],
    },
    {
      name: 'Back-end',
      iconUrl: 'carrer/backend_icon.svg',
      stackIcons: [],
    },
    {
      name: 'Database',
      iconUrl: 'carrer/database_icon.svg',
      stackIcons: [],
    },
    {
      name: 'Dev-Ops',
      iconUrl: 'carrer/devops_icon.svg',
      stackIcons: [],
    },
  ];
};
