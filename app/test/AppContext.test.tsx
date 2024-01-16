import { render, waitFor } from '@testing-library/react';
import {
  AppContextProps,
  AppContextProvider,
  useAppContext,
} from '../context/AppContext';

describe('AppContextProvider', () => {
  it('initializes language state correctly and updates it with setLanguage', async () => {
    let appContext: AppContextProps;

    const TestComponent = () => {
      appContext = useAppContext();
      return null;
    };

    render(
      <AppContextProvider>
        <TestComponent />
      </AppContextProvider>
    );

    await waitFor(() => {
      expect(appContext.language).toBe('en');
    });

    await waitFor(() => {
      appContext.setLanguage('ru');
      expect(appContext.language).toBe('ru');
    });
  });
});
