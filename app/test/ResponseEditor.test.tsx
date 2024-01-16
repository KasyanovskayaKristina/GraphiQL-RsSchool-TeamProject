import ResponseEditor from '../components/ResponseEditor';
import { render, screen, act } from '@testing-library/react';
import { AppContextProvider } from '../context/AppContext';
import AppStoreProvider from '@/redux/provider';

describe('test ResponseEditor', () => {
  it('should render ResponseEditor', async () => {
    await act(async () => {
      render(
        <AppStoreProvider>
          <AppContextProvider>
            <ResponseEditor />
          </AppContextProvider>
        </AppStoreProvider>
      );
    });

    const editor = screen.getByTestId('code-editor-readonly');
    expect(editor).toBeInTheDocument();
    expect(editor).toHaveClass('absolute');
  });
});
