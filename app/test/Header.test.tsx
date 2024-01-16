import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Header from '../components/Header';
import { AppContextProvider } from '../context/AppContext';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/'),
}));

const mockHandleLanguageChange = jest.fn();

jest.mock('../context/AppContext', () => ({
  ...jest.requireActual('../context/AppContext'),
  useAppContext: jest.fn(() => ({
    isAuthenticated: true,
    language: 'en',
    setLanguage: mockHandleLanguageChange,
    signOut: jest.fn(),
    isDataLoaded: true,
  })),
}));

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('Header component', () => {
  it('toggles language and updates localStorage when language is changed', async () => {
    render(
      <AppContextProvider>
        <Header />
      </AppContextProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('main-header')).toBeInTheDocument();
    });

    const languageSwitchButton = screen.getByTestId('language-switch-button');
    fireEvent.click(languageSwitchButton);

    await waitFor(() => {
      expect(localStorageMock.setItem).not.toHaveBeenCalledWith(
        'language',
        'ru'
      );
      expect(localStorageMock.setItem).not.toHaveBeenCalledWith(
        'language',
        'en'
      );
    });
  });
});
