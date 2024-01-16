'use client';

import { useAppSelector } from '@/redux/hooks';
import { useGetDataMutation } from '@/redux/services/graphqlApi';

const ButtonGetData = () => {
  const { schema, isLoading: isLoadingSchema } = useAppSelector(
    (state) => state.schema
  );
  const {
    endpoint,
    query,
    variables,
    headers,
    isLoading: isLoadingData,
  } = useAppSelector((state) => state.graphiql);
  const [getData] = useGetDataMutation();

  const handleClick = () => {
    getData({ endpoint, query, variables, headers });
  };

  return (
    <>
      <button
        type='button'
        className={
          Boolean(schema) && !isLoadingSchema
            ? 'flex aspect-square items-center justify-center rounded hover:bg-slate-200 mobile:hover:bg-inherit tablet:hover:bg-inherit'
            : 'flex aspect-square cursor-not-allowed items-center justify-center rounded'
        }
        onClick={handleClick}
        disabled={!Boolean(schema)}
        data-testid='button-get-data'
      >
        {isLoadingData ? (
          <svg
            fill='rgb(101, 163, 13)'
            height='1.5rem'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 330 330'
            data-testid='svg-loading'
          >
            <g>
              <path
                d='M315,0H15C6.716,0,0,6.716,0,15v300c0,8.284,6.716,15,15,15h300c8.284,0,15-6.716,15-15V15
            C330,6.716,323.284,0,315,0z M300,300H30V30h270V300z'
                stroke='rgb(101, 163, 13)'
                strokeWidth='2'
              />
              <path
                d='M113.729,245.62c2.266,1.256,4.77,1.88,7.271,1.88c2.763,0,5.523-0.763,7.95-2.28l108-67.499
            c4.386-2.741,7.05-7.548,7.05-12.72c0-5.172-2.664-9.979-7.05-12.72l-108-67.501c-4.623-2.891-10.453-3.043-15.222-0.4
            C108.959,87.024,106,92.047,106,97.5v135C106,237.953,108.959,242.976,113.729,245.62z'
                stroke='rgb(101, 163, 13)'
                strokeWidth='2'
              />
            </g>
          </svg>
        ) : Boolean(schema) ? (
          <svg
            fill='none'
            height='1.5rem'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 54 54'
            data-testid='svg-schema'
          >
            <g>
              <path
                d='M49.217,0H4.783C2.146,0,0,2.146,0,4.783v44.434C0,51.854,2.146,54,4.783,54h44.435C51.854,54,54,51.854,54,49.217V4.783
          C54,2.146,51.854,0,49.217,0z M52,49.217C52,50.751,50.751,52,49.217,52H4.783C3.249,52,2,50.751,2,49.217V4.783
          C2,3.249,3.249,2,4.783,2h44.435C50.751,2,52,3.249,52,4.783V49.217z'
                stroke='rgb(101, 163, 13)'
                strokeWidth='2.5'
              />
              <path
                d='M40.043,25.293L18.957,13.118c-0.617-0.355-1.354-0.355-1.971,0C16.369,13.475,16,14.112,16,14.825v24.35
          c0,0.713,0.369,1.351,0.986,1.707c0.309,0.178,0.647,0.268,0.985,0.268s0.677-0.09,0.985-0.268l21.087-12.175
          c0.617-0.356,0.986-0.995,0.986-1.707S40.661,25.649,40.043,25.293z M39.043,26.975L18,39.175l-0.043-24.324L39.043,26.975
          l0.5,0.866L39.043,26.975z'
                stroke='rgb(101, 163, 13)'
                strokeWidth='2.5'
              />
            </g>
          </svg>
        ) : (
          <svg
            fill='rgb(100, 116, 139)'
            height='1.5rem'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 54 54'
          >
            <g>
              <path
                d='M49.217,0H4.783C2.146,0,0,2.146,0,4.783v44.434C0,51.854,2.146,54,4.783,54h44.435C51.854,54,54,51.854,54,49.217V4.783
          C54,2.146,51.854,0,49.217,0z M52,49.217C52,50.751,50.751,52,49.217,52H4.783C3.249,52,2,50.751,2,49.217V4.783
          C2,3.249,3.249,2,4.783,2h44.435C50.751,2,52,3.249,52,4.783V49.217z'
                stroke='rgb(100, 116, 139)'
                strokeWidth='2.5'
              />
              <path
                d='M40.043,25.293L18.957,13.118c-0.617-0.355-1.354-0.355-1.971,0C16.369,13.475,16,14.112,16,14.825v24.35
          c0,0.713,0.369,1.351,0.986,1.707c0.309,0.178,0.647,0.268,0.985,0.268s0.677-0.09,0.985-0.268l21.087-12.175
          c0.617-0.356,0.986-0.995,0.986-1.707S40.661,25.649,40.043,25.293z M39.043,26.975L18,39.175l-0.043-24.324L39.043,26.975
          l0.5,0.866L39.043,26.975z'
                stroke='rgb(100, 116, 139)'
                strokeWidth='2.5'
              />
            </g>
          </svg>
        )}
      </button>
    </>
  );
};

export default ButtonGetData;
