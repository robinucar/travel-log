import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('renders a header', async () => {
  render(<Header />);
  const headingElement = screen.getByText("Travel", "log");
  expect(headingElement).toBeInTheDocument();
});