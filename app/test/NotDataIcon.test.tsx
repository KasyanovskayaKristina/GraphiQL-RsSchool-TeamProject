import NotDataIcon from '../components/NotDataIcon';
import { render, screen, act } from '@testing-library/react';

describe('test NotDataIcon', () => {
  it('should render NotDataIcon', async () => {
    await act(async () => {
      render(<NotDataIcon />);
    });

    const icon = screen.getByTestId('not-data-icon');
    expect(icon).toBeInTheDocument();
  });
});
