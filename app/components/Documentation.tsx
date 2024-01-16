'use client';

import { useAppSelector } from '@/redux/hooks';
import { StringsMapType } from '../types/types';
import { useAppContext } from '../context/AppContext';

const strings: StringsMapType = {
  title: {
    en: 'Documentation',
    ru: 'Документация',
  },
};

const Documentation = () => {
  const { language } = useAppContext();
  const { schema } = useAppSelector((state) => state.schema);

  return (
    <>
      <div
        className='relative flex flex-1 -translate-x-4 flex-col items-start gap-y-5 overflow-auto rounded-r-lg bg-slate-50 p-4 pl-6 shadow-xl mobile:max-h-[450px] mobile:min-h-[450px] mobile:-translate-y-4 mobile:translate-x-0 mobile:rounded-b-lg mobile:rounded-r-none tablet:max-h-[450px] tablet:min-h-[450px] tablet:-translate-y-4 tablet:translate-x-0 tablet:rounded-b-lg tablet:rounded-r-none'
        data-testid='doc'
      >
        <h3 className='text-3xl'>{strings.title[language]}</h3>
        <p className='overflow-auto text-sm'>{schema}</p>
      </div>
    </>
  );
};

export default Documentation;
