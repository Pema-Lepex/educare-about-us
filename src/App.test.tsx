import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

test('renders Mission statement', () => {
  render(<App />);
  const linkElement = screen.getByText(/Mission/i);
  expect(linkElement).toBeInTheDocument();
});
