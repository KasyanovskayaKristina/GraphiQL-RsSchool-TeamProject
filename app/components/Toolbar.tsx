'use client';

import ButtonToggleShowDoc from './ButtonToggleShowDoc';
import ButtonGetData from './ButtonGetData';
import ButtonPrettifyQuery from './ButtonPrettifyQuery';

const Toolbar = () => {
  return (
    <>
      <div
        className='relative z-10 flex w-12 flex-shrink-0 flex-col gap-4 rounded-lg bg-slate-300 px-0.5 py-4 shadow-xl mobile:h-12 mobile:w-full mobile:flex-row mobile:justify-between mobile:px-4 mobile:py-0.5 tablet:h-12 tablet:w-full tablet:flex-row tablet:justify-between tablet:px-4 tablet:py-0.5'
        data-testid='toolbar'
      >
        <ButtonToggleShowDoc />
        <ButtonGetData />
        <ButtonPrettifyQuery />
      </div>
    </>
  );
};

export default Toolbar;
