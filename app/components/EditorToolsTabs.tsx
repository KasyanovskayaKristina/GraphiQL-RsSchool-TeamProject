import graphiqlSlice from '@/redux/features/graphiql/graphiqlSlice';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { EditorTabMode } from '../types/types';
import { StringsMapType } from '../types/types';
import { useAppContext } from '../context/AppContext';

const strings: StringsMapType = {
  variables: {
    en: 'Variables',
    ru: 'Переменные',
  },
  headers: {
    en: 'Headers',
    ru: 'Заголовки',
  },
};

const EditorToolsTabs = () => {
  const dispatch = useAppDispatch();
  const { activeQueryPayloadTab, isQueryPayloadTabOpen } = useAppSelector(
    (state) => state.graphiql
  );
  const { language } = useAppContext();

  const setActiveQueryPayloadTab = (tab: EditorTabMode) => {
    dispatch(graphiqlSlice.actions.setActiveQueryPayloadTab(tab));
  };

  const isActiveQueryPayloadTab = (tab: EditorTabMode) =>
    tab === activeQueryPayloadTab;

  return (
    <div
      className='flex items-center justify-between border-t border-solid border-t-slate-200 bg-slate-100 p-1'
      data-testid='tools-tabs'
    >
      <div className='flex gap-6 mobile:gap-2'>
        <button
          className={
            isActiveQueryPayloadTab(EditorTabMode.Variables)
              ? 'cursor-pointer rounded border-none p-2 text-slate-800 underline decoration-slate-400 decoration-dashed decoration-1 underline-offset-8	outline-none hover:border-none hover:bg-slate-200 hover:outline-none'
              : 'cursor-pointer rounded border-none p-2 text-slate-500 outline-none hover:border-none hover:bg-slate-200 hover:outline-none'
          }
          onClick={() => {
            setActiveQueryPayloadTab(EditorTabMode.Variables);

            if (
              isActiveQueryPayloadTab(EditorTabMode.Variables) ||
              !isQueryPayloadTabOpen
            ) {
              dispatch(
                graphiqlSlice.actions.toggleOpenQueryPayloadTab(
                  !isQueryPayloadTabOpen
                )
              );
            }
          }}
          data-testid='tools-tabs-variables'
        >
          {strings.variables[language]}
        </button>
        <button
          className={
            isActiveQueryPayloadTab(EditorTabMode.Headers)
              ? 'cursor-pointer rounded border-none bg-transparent p-2 text-slate-800 underline decoration-slate-400 decoration-dashed decoration-1 underline-offset-8	outline-none hover:border-none hover:bg-slate-200 hover:outline-none'
              : 'cursor-pointer rounded border-none bg-transparent p-2 text-slate-500 outline-none hover:border-none hover:bg-slate-200 hover:outline-none'
          }
          onClick={() => {
            setActiveQueryPayloadTab(EditorTabMode.Headers);

            if (
              isActiveQueryPayloadTab(EditorTabMode.Headers) ||
              !isQueryPayloadTabOpen
            ) {
              dispatch(
                graphiqlSlice.actions.toggleOpenQueryPayloadTab(
                  !isQueryPayloadTabOpen
                )
              );
            }
          }}
          data-testid='tools-tabs-headers'
        >
          {strings.headers[language]}
        </button>
      </div>
      <button
        className='h-full cursor-pointer rounded border-none bg-transparent p-2 outline-none hover:border-none hover:bg-slate-200 hover:outline-none'
        onClick={() =>
          dispatch(
            graphiqlSlice.actions.toggleOpenQueryPayloadTab(
              !isQueryPayloadTabOpen
            )
          )
        }
        data-testid='tools-tabs-open'
      >
        <svg
          height='1em'
          viewBox='0 0 14 9'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <path
            d={isQueryPayloadTabOpen ? 'M1 1L7 7L13 1' : 'M13 8L7 2L1 8'}
            stroke='rgb(148, 163, 184)'
            strokeWidth='1.5'
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default EditorToolsTabs;
