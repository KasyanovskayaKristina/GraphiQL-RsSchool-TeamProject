'use client';

import { useRef } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { EditorView } from '@codemirror/view';
import { CodeEditorMode } from '../types/types';

interface CodeEditorProps {
  mode: CodeEditorMode;
  value: string;
  onChange?: (value: string) => void;
}

const CodeEditor = ({ mode, value, onChange }: CodeEditorProps) => {
  const myTheme = useRef(
    EditorView.theme(
      mode === CodeEditorMode.Editor
        ? {
            '&': {
              height: '100%',
            },
            '&.cm-focused': {
              outline: 'none',
            },
          }
        : {
            '&': {
              height: '100%',
              background: 'none !important',
            },
            '&.cm-focused': {
              outline: 'none',
            },
            '.cm-gutters': {
              display: 'none !important',
            },
            '.cm-activeLine': {
              background: 'none',
            },
          }
    )
  );

  return (
    <div className='relative h-full flex-1'>
      {mode === CodeEditorMode.Editor ? (
        <CodeMirror
          value={value}
          onChange={onChange}
          className='absolute bottom-0 left-0 right-0 top-0 overflow-auto text-sm'
          extensions={[json(), myTheme.current]}
          data-testid='code-editor'
        />
      ) : (
        <CodeMirror
          value={value}
          className='absolute bottom-0 left-0 right-0 top-0 overflow-auto text-sm'
          extensions={[json(), myTheme.current]}
          readOnly
          data-testid='code-editor-readonly'
        />
      )}
    </div>
  );
};

export default CodeEditor;
