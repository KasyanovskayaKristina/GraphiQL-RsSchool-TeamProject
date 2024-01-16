import QueryEditor from '../components/QueryEditor';
import { render, screen, act } from '@testing-library/react';
import { AppContextProvider } from '../context/AppContext';
import AppStoreProvider from '@/redux/provider';

describe('test QueryEditor', () => {
  it('should render QueryEditor', async () => {
    await act(async () => {
      render(
        <AppStoreProvider>
          <AppContextProvider>
            <QueryEditor />
          </AppContextProvider>
        </AppStoreProvider>
      );
    });

    const editor = screen.getByTestId('code-editor');
    expect(editor).toBeInTheDocument();
    expect(editor).toHaveClass('absolute');
  });
});
