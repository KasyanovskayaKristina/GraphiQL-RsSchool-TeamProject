import { render, screen, act } from '@testing-library/react';
import ButtonGetData from '../components/ButtonGetData';
import { AppContextProvider } from '../context/AppContext';
import AppStoreProvider from '@/redux/provider';

describe('test ButtonGetData', () => {
  it('should render ButtonGetData', async () => {
    await act(async () => {
      render(
        <AppStoreProvider>
          <AppContextProvider>
            <ButtonGetData />
          </AppContextProvider>
        </AppStoreProvider>
      );
    });

    const button = screen.getByTestId('button-get-data');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('aspect-square');
  });
});
