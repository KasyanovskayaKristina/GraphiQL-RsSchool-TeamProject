import Toolbar from '../components/Toolbar';
import { render, screen, act } from '@testing-library/react';
import { AppContextProvider } from '../context/AppContext';
import AppStoreProvider from '@/redux/provider';

describe('test Toolbar', () => {
  it('should render Toolbar', async () => {
    await act(async () => {
      render(
        <AppStoreProvider>
          <AppContextProvider>
            <Toolbar />
          </AppContextProvider>
        </AppStoreProvider>
      );
    });

    const toolbar = screen.getByTestId('toolbar');
    expect(toolbar).toBeInTheDocument();
  });
});
