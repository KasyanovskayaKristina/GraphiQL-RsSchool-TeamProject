import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../components/Footer';

describe('Footer component', () => {
  it('renders the current year and GitHub links', () => {
    const { getByText, getByAltText } = render(<Footer />);

    const currentYear = new Date().getFullYear();
    expect(getByText(`© ${currentYear}`)).toBeInTheDocument();

    expect(getByText('KirillGenin')).toBeInTheDocument();
    expect(getByText('KristinaKasyanovskaya')).toBeInTheDocument();
    expect(getByText('Maltsau')).toBeInTheDocument();

    expect(getByAltText('RsSchoolLogo')).toBeInTheDocument();
  });
});
