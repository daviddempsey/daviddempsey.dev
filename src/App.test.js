import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';

test('renders the starter homepage', () => {
  render(<LandingPage />);
  expect(screen.getByRole('heading', { name: /next chapter/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /get in touch/i })).toHaveAttribute('href', 'mailto:hello@example.com');
});
