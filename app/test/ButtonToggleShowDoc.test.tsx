import ButtonToggleShowDoc from '../components/ButtonToggleShowDoc';
import { render, screen, act, fireEvent } from '@testing-library/react';
import { AppContextProvider } from '../context/AppContext';
import AppStoreProvider from '@/redux/provider';

describe('test ButtonToggleShowDoc', () => {
  it('should render ButtonToggleShowDoc', async () => {
    await act(async () => {
      render(
        <AppStoreProvider>
          <AppContextProvider>
            <ButtonToggleShowDoc />
          </AppContextProvider>
        </AppStoreProvider>
      );
    });

    const button = screen.getByTestId('btn-doc');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('aspect-square');

    fireEvent.click(button);
  });
});
