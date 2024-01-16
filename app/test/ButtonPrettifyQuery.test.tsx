import ButtonPrettifyQuery from '../components/ButtonPrettifyQuery';
import { render, screen, act } from '@testing-library/react';
import { AppContextProvider } from '../context/AppContext';
import AppStoreProvider from '@/redux/provider';

describe('test ButtonPrettifyQuery', () => {
  it('should render ButtonPrettifyQuery', async () => {
    await act(async () => {
      render(
        <AppStoreProvider>
          <AppContextProvider>
            <ButtonPrettifyQuery />
          </AppContextProvider>
        </AppStoreProvider>
      );
    });

    const button = screen.getByTestId('btn-prettify');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('aspect-square');
  });
});
