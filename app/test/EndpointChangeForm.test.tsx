import { render, screen, act, fireEvent } from '@testing-library/react';
import EndpointChangeForm from '../components/EndpointChangeForm';
import { AppContextProvider } from '../context/AppContext';
import AppStoreProvider from '@/redux/provider';

describe('test EndpointChangeForm', () => {
  it('renders form', async () => {
    await act(async () => {
      render(
        <AppStoreProvider>
          <AppContextProvider>
            <EndpointChangeForm />
          </AppContextProvider>
        </AppStoreProvider>
      );
    });

    const form = screen.getByTestId('endpoint-change-form');
    expect(form).toBeInTheDocument();
    expect(form).toHaveClass('max-w-4xl');
  });

  it('renders input of EndpointChangeForm', async () => {
    await act(async () => {
      render(
        <AppStoreProvider>
          <AppContextProvider>
            <EndpointChangeForm />
          </AppContextProvider>
        </AppStoreProvider>
      );
    });

    const input = screen.getByTestId('endpoint-input');

    expect(input).toBeInTheDocument();

    fireEvent.change(input, {
      target: { value: 'https://rickandmortyapi.com/graphql' },
    });

    expect(input).toHaveValue('https://rickandmortyapi.com/graphql');
  });

  it('renders button of EndpointChangeForm', async () => {
    await act(async () => {
      render(
        <AppStoreProvider>
          <AppContextProvider>
            <EndpointChangeForm />
          </AppContextProvider>
        </AppStoreProvider>
      );
    });

    const button = screen.getByTestId('endpoint-button');

    expect(button).toBeInTheDocument();
  });

  it('should handle submit', async () => {
    await act(async () => {
      render(
        <AppStoreProvider>
          <AppContextProvider>
            <EndpointChangeForm />
          </AppContextProvider>
        </AppStoreProvider>
      );
    });

    const form = screen.getByTestId('endpoint-change-form');

    const input = screen.getByTestId('endpoint-input');

    fireEvent.change(input, {
      target: { value: 'https://rickandmortyapi.com/graphql' },
    });

    fireEvent.submit(form);
  });
});
