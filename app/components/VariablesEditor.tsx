'use client';

import { CodeEditorMode } from '../types/types';
import CodeEditor from '../components/CodeEditor';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import graphiqlSlice from '@/redux/features/graphiql/graphiqlSlice';

const VariablesEditor = () => {
  const { variables } = useAppSelector((state) => state.graphiql);
  const dispatch = useAppDispatch();

  const onChange = (value: string) => {
    dispatch(graphiqlSlice.actions.setVariables(value.trim()));
  };

  return (
    <>
      <CodeEditor
        mode={CodeEditorMode.Editor}
        value={variables}
        onChange={onChange}
      />
    </>
  );
};

export default VariablesEditor;
