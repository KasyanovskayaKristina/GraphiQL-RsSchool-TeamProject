import { render, screen, fireEvent } from '@testing-library/react';
import TeammateCard from '../components/TeammateCard';

const mockTeammate = {
  isActive: true,
  avatar: 'teammate-avatar',
  position: 'Software Engineer',
  name: 'John Doe',
  description: 'A talented software engineer.',
  onClick: jest.fn(),
};

describe('TeammateCard component', () => {
  it('renders the teammate card with active state', () => {
    render(<TeammateCard {...mockTeammate} />);

    const teammateCard = screen.getByTestId('teammate-card');
    expect(teammateCard).toBeInTheDocument();

    const positionElement = screen.getByText(mockTeammate.position);
    const nameElement = screen.getByText(mockTeammate.name);
    const descriptionElement = screen.getByText(mockTeammate.description);

    expect(positionElement).toBeVisible();
    expect(nameElement).toBeVisible();
    expect(descriptionElement).toBeVisible();

    const inactiveElement = screen.queryByText(mockTeammate.position);
    expect(inactiveElement).not.toBeNull();

    fireEvent.click(teammateCard);
    expect(mockTeammate.onClick).toHaveBeenCalled();
  });

  it('renders the teammate card with inactive state', () => {
    const inactiveTeammate = { ...mockTeammate, isActive: false };
    render(<TeammateCard {...inactiveTeammate} />);

    const teammateCard = screen.getByTestId('teammate-card');
    expect(teammateCard).toBeInTheDocument();

    const inactiveElement = screen.getByText(inactiveTeammate.position);
    expect(inactiveElement).toBeVisible();

    const positionElement = screen.queryByText(inactiveTeammate.position);
    const nameElement = screen.queryByText(inactiveTeammate.name);
    const descriptionElement = screen.queryByText(inactiveTeammate.description);

    expect(positionElement).not.toBeNull();
    expect(nameElement).toBeNull();
    expect(descriptionElement).toBeNull();

    fireEvent.click(teammateCard);
    expect(inactiveTeammate.onClick).toHaveBeenCalled();
  });
});
