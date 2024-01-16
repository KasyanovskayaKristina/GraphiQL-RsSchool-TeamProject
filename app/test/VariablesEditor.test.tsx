import VariablesEditor from '../components/VariablesEditor';
import { render, screen, act } from '@testing-library/react';
import { AppContextProvider } from '../context/AppContext';
import AppStoreProvider from '@/redux/provider';

describe('test VariablesEditor', () => {
  it('should render VariablesEditor', async () => {
    await act(async () => {
      render(
        <AppStoreProvider>
          <AppContextProvider>
            <VariablesEditor />
          </AppContextProvider>
        </AppStoreProvider>
      );
    });

    const editor = screen.getByTestId('code-editor');
    expect(editor).toBeInTheDocument();
    expect(editor).toHaveClass('absolute');
  });
});
