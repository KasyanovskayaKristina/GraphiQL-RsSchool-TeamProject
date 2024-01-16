'use client';

import { CodeEditorMode } from '../types/types';
import CodeEditor from '../components/CodeEditor';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import graphiqlSlice from '@/redux/features/graphiql/graphiqlSlice';

const HeadersEditor = () => {
  const { headers } = useAppSelector((state) => state.graphiql);
  const dispatch = useAppDispatch();

  const onChange = (value: string) => {
    dispatch(graphiqlSlice.actions.setHeaders(value.trim()));
  };

  return (
    <>
      <CodeEditor
        mode={CodeEditorMode.Editor}
        value={headers}
        onChange={onChange}
      />
    </>
  );
};

export default HeadersEditor;
