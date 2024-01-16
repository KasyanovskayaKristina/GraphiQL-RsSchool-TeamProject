'use client';

import { useEffect } from 'react';
import Image from 'next/image';

import { useAppContext } from './context/AppContext';
import { StringsMapType } from './types/types';
import { LinkStyled, ButtonStyled } from './components/CommonUIElements';
import errorIcon from '../public/error-icon.svg';
import { toast } from 'react-toastify';

const strings: StringsMapType = {
  title: {
    en: 'Something went wrong!',
    ru: 'Что-то пошло не так!',
  },
  tryAgainLink: {
    en: 'Try again',
    ru: 'Попробоапть снова',
  },
  homeLink: {
    en: 'Go to the home page',
    ru: 'Вернуться на главную',
  },
};

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    toast.error(error.message);
  }, [error]);

  const { language } = useAppContext();

  return (
    <div className='flex min-h-[600px] flex-col items-center justify-center gap-7'>
      <Image src={errorIcon} alt='error-icon' width={100} height={100} />
      <h2 className='text-2xl'>{strings.title[language]}</h2>
      <div className='flex justify-center gap-3 tablet:flex-col'>
        <ButtonStyled
          title={strings.tryAgainLink[language]}
          color='bg-slate-900'
          hoverColor='hover:bg-slate-500'
          onClick={() => reset()}
        />
        <LinkStyled
          title={strings.homeLink[language]}
          direction={'/'}
          color='bg-lime-600'
          hoverColor='hover:bg-lime-500'
        />
      </div>
    </div>
  );
}
