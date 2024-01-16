import Spinner from '../components/Spinner';
import { render, screen, act } from '@testing-library/react';

describe('test Spinner', () => {
  it('should render Spinner', async () => {
    await act(async () => {
      render(<Spinner />);
    });

    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
  });
});
