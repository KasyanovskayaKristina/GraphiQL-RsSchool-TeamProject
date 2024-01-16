import CodeEditor from '../components/CodeEditor';
import { CodeEditorMode } from '../types/types';
import { render, screen, act } from '@testing-library/react';

describe('test CodeEditor', () => {
  it('should render CodeEditor with editor mode', async () => {
    await act(async () => {
      render(<CodeEditor mode={CodeEditorMode.Editor} value='' />);
    });

    const editor = screen.getByTestId('code-editor');
    expect(editor).toBeInTheDocument();
    expect(editor).toHaveClass('absolute');
  });

  it('should render CodeEditor with viewer mode', async () => {
    await act(async () => {
      render(<CodeEditor mode={CodeEditorMode.Viewer} value='' />);
    });

    const editor = screen.getByTestId('code-editor-readonly');
    expect(editor).toBeInTheDocument();
    expect(editor).toHaveClass('absolute');
  });
});
