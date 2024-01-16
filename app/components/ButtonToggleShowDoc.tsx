'use client';

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import schemaSlice from '@/redux/features/graphiql/schemaSlice';

const ButtonToggleShowDoc = () => {
  const { isOpen, schema, isLoading } = useAppSelector((state) => state.schema);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (schema) {
      dispatch(schemaSlice.actions.toggleOpen(!isOpen));
    }
  };

  return (
    <>
      <button
        type='button'
        className={
          Boolean(schema) && !isLoading
            ? 'flex aspect-square items-center justify-center rounded hover:bg-slate-200 mobile:hover:bg-inherit tablet:hover:bg-inherit'
            : 'flex aspect-square cursor-not-allowed items-center justify-center rounded'
        }
        onClick={handleClick}
        disabled={!Boolean(schema)}
        data-testid='btn-doc'
      >
        {isLoading ? (
          <svg
            height='1.5rem'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 100 100'
            fill='rgb(100, 116, 139)'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M50 6.90308L87.323 28.4515V71.5484L50 93.0968L12.677 71.5484V28.4515L50 6.90308ZM16.8647 30.8693V62.5251L44.2795 15.0414L16.8647 30.8693ZM50 13.5086L18.3975 68.2457H81.6025L50 13.5086ZM77.4148 72.4334H22.5852L50 88.2613L77.4148 72.4334ZM83.1353 62.5251L55.7205 15.0414L83.1353 30.8693V62.5251Z'
            />
            <circle cx='50' cy='9.3209' r='8.82' />
            <circle cx='85.2292' cy='29.6605' r='8.82' />
            <circle cx='85.2292' cy='70.3396' r='8.82' />
            <circle cx='50' cy='90.6791' r='8.82' />
            <circle cx='14.7659' cy='70.3396' r='8.82' />
            <circle cx='14.7659' cy='29.6605' r='8.82' />
            <animateTransform
              attributeName='transform'
              attributeType='XML'
              type='rotate'
              from='0'
              to='360'
              dur='1s'
              repeatCount='indefinite'
            />
          </svg>
        ) : !Boolean(schema) ? (
          <svg
            height='1.5rem'
            viewBox='0 0 20 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0.75 3C0.75 4.24264 1.75736 5.25 3 5.25H17.25M0.75 3C0.75 1.75736 1.75736 0.75 3 0.75H16.25C16.8023 0.75 17.25 1.19772 17.25 1.75V5.25M0.75 3V21C0.75 22.2426 1.75736 23.25 3 23.25H18.25C18.8023 23.25 19.25 22.8023 19.25 22.25V6.25C19.25 5.69771 18.8023 5.25 18.25 5.25H17.25'
              stroke='rgb(100, 116, 139)'
              strokeWidth='2'
            ></path>
            <line
              x1='13'
              y1='11.75'
              x2='6'
              y2='11.75'
              stroke='rgb(100, 116, 139)'
              strokeWidth='2'
            ></line>
          </svg>
        ) : isOpen ? (
          <svg
            height='1.5rem'
            viewBox='0 0 20 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0.75 3C0.75 1.75736 1.75736 0.75 3 0.75H17.25C17.8023 0.75 18.25 1.19772 18.25 1.75V5.25'
              stroke='rgb(101, 163, 13)'
              strokeWidth='2'
            ></path>
            <path
              d='M0.75 3C0.75 4.24264 1.75736 5.25 3 5.25H18.25C18.8023 5.25 19.25 5.69771 19.25 6.25V22.25C19.25 22.8023 18.8023 23.25 18.25 23.25H3C1.75736 23.25 0.75 22.2426 0.75 21V3Z'
              stroke='rgb(101, 163, 13)'
              strokeWidth='2'
            ></path>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M3 5.25C1.75736 5.25 0.75 4.24264 0.75 3V21C0.75 22.2426 1.75736 23.25 3 23.25H18.25C18.8023 23.25 19.25 22.8023 19.25 22.25V6.25C19.25 5.69771 18.8023 5.25 18.25 5.25H3ZM13 11L6 11V12.5L13 12.5V11Z'
              fill='rgb(101, 163, 13)'
            ></path>
          </svg>
        ) : (
          <svg
            height='1.5rem'
            viewBox='0 0 20 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0.75 3C0.75 4.24264 1.75736 5.25 3 5.25H17.25M0.75 3C0.75 1.75736 1.75736 0.75 3 0.75H16.25C16.8023 0.75 17.25 1.19772 17.25 1.75V5.25M0.75 3V21C0.75 22.2426 1.75736 23.25 3 23.25H18.25C18.8023 23.25 19.25 22.8023 19.25 22.25V6.25C19.25 5.69771 18.8023 5.25 18.25 5.25H17.25'
              stroke='rgb(101, 163, 13)'
              strokeWidth='2'
            ></path>
            <line
              x1='13'
              y1='11.75'
              x2='6'
              y2='11.75'
              stroke='rgb(101, 163, 13)'
              strokeWidth='2'
            ></line>
          </svg>
        )}
      </button>
    </>
  );
};

export default ButtonToggleShowDoc;
