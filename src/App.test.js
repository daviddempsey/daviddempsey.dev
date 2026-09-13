import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';

test('renders the personal homepage', () => {
  render(<LandingPage />);
  expect(screen.getByRole('heading', { name: 'David Dempsey' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute('href', 'mailto:davidgdempsey@gmail.com');
});
