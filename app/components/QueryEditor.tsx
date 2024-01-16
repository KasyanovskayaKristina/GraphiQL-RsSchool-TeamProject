'use client';

import { CodeEditorMode } from '../types/types';
import CodeEditor from '../components/CodeEditor';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import graphiqlSlice from '@/redux/features/graphiql/graphiqlSlice';

const QueryEditor = () => {
  const { query } = useAppSelector((state) => state.graphiql);
  const dispatch = useAppDispatch();

  const onChange = (value: string) => {
    dispatch(graphiqlSlice.actions.setQuery(value.trim()));
  };

  return (
    <>
      <div className='flex-[2_1_0%] flex flex-col'>
        <CodeEditor
          mode={CodeEditorMode.Editor}
          value={query}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default QueryEditor;
