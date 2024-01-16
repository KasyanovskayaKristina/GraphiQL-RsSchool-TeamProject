import HeadersEditor from '../components/HeadersEditor';
import { render, screen, act } from '@testing-library/react';
import { AppContextProvider } from '../context/AppContext';
import AppStoreProvider from '@/redux/provider';

describe('test HeadersEditor', () => {
  it('should render HeadersEditor', async () => {
    await act(async () => {
      render(
        <AppStoreProvider>
          <AppContextProvider>
            <HeadersEditor />
          </AppContextProvider>
        </AppStoreProvider>
      );
    });

    const editor = screen.getByTestId('code-editor');
    expect(editor).toBeInTheDocument();
    expect(editor).toHaveClass('absolute');
  });
});
