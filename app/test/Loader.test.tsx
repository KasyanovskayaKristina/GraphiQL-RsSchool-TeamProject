import { render, screen } from '@testing-library/react';
import Loader from '../components/Loader';

describe('Loader component', () => {
  it('renders the loader with the correct structure', () => {
    render(<Loader />);

    const mainContainer = screen.getByTestId('loader');
    expect(mainContainer).toBeInTheDocument();

    const animationContainer = screen.getByTestId('animation-container');
    expect(animationContainer).toBeInTheDocument();

    const loadingText = screen.getByText(/loading/i);
    expect(loadingText).toBeInTheDocument();

    expect(animationContainer).toHaveClass(
      'absolute m-[8px] box-border block h-[64px] w-[64px] animate-spin rounded-full border-[8px] border-b-black'
    );
  });
});
