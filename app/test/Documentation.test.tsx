import Documentation from '../components/Documentation';
import { render, screen, act } from '@testing-library/react';
import { AppContextProvider } from '../context/AppContext';
import AppStoreProvider from '@/redux/provider';

describe('test Documentation', () => {
  it('should render Documentation', async () => {
    await act(async () => {
      render(
        <AppStoreProvider>
          <AppContextProvider>
            <Documentation />
          </AppContextProvider>
        </AppStoreProvider>
      );
    });

    const doca = screen.getByTestId('doc');
    expect(doca).toBeInTheDocument();
  });
});
