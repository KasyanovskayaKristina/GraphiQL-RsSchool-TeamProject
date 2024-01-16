import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import NotFound from '../not-found';

jest.mock('../context/AppContext', () => ({
  useAppContext: jest.fn(() => ({ language: 'en' })),
}));

describe('NotFound component', () => {
  it('renders the component with English text', () => {
    render(<NotFound />);
    expect(screen.getByText('Not Found!')).toBeInTheDocument();
    expect(
      screen.getByText('Could not find requested resource')
    ).toBeInTheDocument();
    expect(screen.getByText('Return Home')).toBeInTheDocument();
  });
});

it('navigates to the home page when the "Return Home" link is clicked', () => {
  const { container } = render(<NotFound />);
  const homeLink: HTMLAnchorElement =
    container.querySelector('a') ?? document.createElement('a');
  expect(homeLink?.getAttribute('href')).toBe('/');

  userEvent.click(homeLink);
});
