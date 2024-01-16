'use client';

import { useState } from 'react';

import { useAppContext } from './context/AppContext';

import { StringsMapType } from './types/types';
import { ITeammateCardProps } from './types/types';
import TeammateCard from './components/TeammateCard';
import Loader from './components/Loader';

type ActiveCardType = 'Kirill' | 'Kristina' | 'Dzmitry';

interface ITeammates {
  kristina: ITeammateCardProps;
  kirill: ITeammateCardProps;
  dzmitry: ITeammateCardProps;
}

const strings: StringsMapType = {
  title: {
    en: 'Source of Bugs Team',
    ru: 'Команда "Source of Bugs"',
  },
  kristinaName: {
    en: 'Kristina Kasyanovskaya',
    ru: 'Кристина Касьяновская',
  },
  kristinaPosition: {
    en: 'Project Manager',
    ru: 'Проджект-менеджер',
  },
  kristinaDescription: {
    en: 'On the current project, Kristina, an experienced developer, seamlessly combines project management responsibilities, ensuring effective team coordination and the creation of high-quality software solutions',
    ru: 'Кристина, опытный разработчик, на данном проекте успешно совмещает обязанности проджект-менеджера, обеспечивая эффективную координацию команды и создание высококачественных программных решений',
  },
  kirillName: {
    en: 'Kirill Genin',
    ru: 'Кирилл Генин',
  },
  kirillPosition: {
    en: 'Team Lead',
    ru: 'Тимлид',
  },
  kirillDescription: {
    en: 'Kirill, an outstanding developer and team lead, effectively leads the project team, ensuring a high level of coordination and inspiring colleagues to create innovative software solutions',
    ru: 'Кирилл, выдающийся разработчик и тимлид, успешно руководит командой на проекте, обеспечивая высокий уровень координации и вдохновляя коллег на создание инновационных программных решений',
  },
  dzmitryName: {
    en: 'Dzmitry Maltsau',
    ru: 'Дмитрий Мальцев',
  },
  dzmitryPosition: {
    en: 'Developer',
    ru: 'Разработчик',
  },
  dzmitryDescription: {
    en: 'Dzmitry is a talented developer who contributes significantly to the project with his professionalism and creative approach to programming',
    ru: 'Дмитрий — талантливый разработчик, вносящий значительный вклад в проект своим профессионализмом и креативным подходом к программированию',
  },
};

export default function HomePage() {
  const { language, isDataLoaded } = useAppContext();
  const [activeCard, setActiveCard] = useState<ActiveCardType>('Kristina');

  const teammates: ITeammates = {
    kristina: {
      name: strings.kristinaName[language],
      avatar: "bg-[url('../public/kristina-avatar2.png')]",
      position: strings.kristinaPosition[language],
      description: strings.kristinaDescription[language],
      isActive: activeCard === 'Kristina',
      onClick: () => setActiveCard('Kristina'),
    },
    kirill: {
      name: strings.kirillName[language],
      avatar: 'bg-[url("../public/kirill-avatar2.png")]',
      position: strings.kirillPosition[language],
      description: strings.kirillDescription[language],
      isActive: activeCard === 'Kirill',
      onClick: () => setActiveCard('Kirill'),
    },
    dzmitry: {
      name: strings.dzmitryName[language],
      avatar: 'bg-[url("../public/dzmitry-avatar2.png")]',
      position: strings.dzmitryPosition[language],
      description: strings.dzmitryDescription[language],
      isActive: activeCard === 'Dzmitry',
      onClick: () => setActiveCard('Dzmitry'),
    },
  };
  return isDataLoaded ? (
    <div className='flex flex-col p-10 mobile:p-0 tablet:p-0'>
      <h1 className='text-center text-4xl font-bold'>
        {strings.title[language]}
      </h1>
      <div className='flex items-center justify-center p-7 mobile:flex-col tablet:flex-col laptop:flex-col'>
        <TeammateCard {...teammates.kristina} />
        <TeammateCard {...teammates.kirill} />
        <TeammateCard {...teammates.dzmitry} />
      </div>
    </div>
  ) : (
    <Loader />
  );
}
