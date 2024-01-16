'use client';
import Image from 'next/image';

import { LinkStyled } from './components/CommonUIElements';
import { useAppContext } from './context/AppContext';

import notFoundIcon from '../public/404-icon.svg';
import { StringsMapType } from './types/types';

const strings: StringsMapType = {
  title: {
    en: 'Not Found!',
    ru: 'Не найдено!',
  },
  subTitle: {
    en: 'Could not find requested resource',
    ru: 'Не удалось найти запрошенный ресурс',
  },
  homeLink: {
    en: 'Return Home',
    ru: 'Вернуться на главную',
  },
};

export default function NotFound() {
  const { language } = useAppContext();
  return (
    <div className='flex min-h-[600px] flex-col items-center justify-center gap-5'>
      <Image src={notFoundIcon} alt='error-icon' width={100} height={100} />
      <h2 className='text-center text-2xl'>{strings.title[language]}</h2>
      <h3 className='text-center text-2xl'>{strings.subTitle[language]}</h3>
      <LinkStyled
        direction='/'
        title={strings.homeLink[language]}
        color='bg-lime-600'
        hoverColor='hover:bg-lime-500'
      />
    </div>
  );
}
