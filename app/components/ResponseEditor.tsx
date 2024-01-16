'use client';

import { CodeEditorMode } from '../types/types';
import CodeEditor from '../components/CodeEditor';
import { useAppSelector } from '@/redux/hooks';
import Spinner from './Spinner';
import NotDataIcon from './NotDataIcon';

const ResponseEditor = () => {
  const { data, isLoading, hasError } = useAppSelector(
    (state) => state.graphiql
  );

  return (
    <>
      <div className='flex h-[550px] min-h-[550px] flex-1 flex-col mobile:h-[450px] mobile:min-h-[450px] tablet:h-[450px] tablet:min-h-[450px]'>
        {isLoading ? (
          <div className='flex h-full flex-1 items-center justify-center'>
            <Spinner />
          </div>
        ) : hasError ? (
          <div className='flex h-full flex-1 items-center justify-center'>
            <NotDataIcon />
          </div>
        ) : (
          <CodeEditor mode={CodeEditorMode.Viewer} value={data} />
        )}
      </div>
    </>
  );
};

export default ResponseEditor;
