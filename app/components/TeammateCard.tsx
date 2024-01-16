'use client';

import { ITeammateCardProps } from '../types/types';

export default function TeammateCard(teammate: ITeammateCardProps) {
  return (
    <div
      data-testid='teammate-card'
      className={`
    ${
      teammate.isActive
        ? 'h-[600px] w-[600px] transition-all duration-300 ease-in-out mobile:w-full tablet:w-full laptop:w-9/12'
        : 'h-[600px] w-[300px] transition-all duration-300 ease-in-out mobile:h-[300px] mobile:w-full tablet:h-[300px] tablet:w-full laptop:h-[300px] laptop:w-9/12'
    }
    ${teammate.avatar}
    flex cursor-pointer flex-col justify-end gap-5 bg-center bg-no-repeat p-10 mobile:p-2 tablet:p-2 desctop:h-[40vw]
  `}
      onClick={teammate.onClick}
    >
      {teammate.isActive ? (
        <>
          <div className='flex justify-between rounded-md bg-lime-600 p-3 text-white mobile:flex-col tablet:flex-col laptop:flex-col'>
            <span>{teammate.position}</span>
            <span className='mobile:text-2xl tablet:text-2xl laptop:text-2xl'>
              {teammate.name}
            </span>
          </div>
          <p className='animate-[fadeInFromAbove_0.3s_ease-in-out] bg-slate-300 bg-opacity-50 p-1'>
            {teammate.description}
          </p>
        </>
      ) : (
        <div className='rounded-md bg-slate-500 p-3 text-white'>
          {teammate.position}
        </div>
      )}
    </div>
  );
}
