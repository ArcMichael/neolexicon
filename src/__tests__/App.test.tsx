// __tests__/App.test.tsx
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from '../App';

test('renders the App component without crashing', () => {
  const { container } = render(<App />);
  expect(container).toBeDefined();
});

test('renders the Routes component', () => {
  const { getByTestId } = render(<App />);
  const routesElement = getByTestId('routes-element');
  expect(routesElement).toBeInTheDocument();
});
