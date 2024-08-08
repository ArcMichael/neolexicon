import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '../App';

// Mock the @tauri-apps/api/core module to prevent actual API calls
jest.mock('@tauri-apps/api/core', () => ({
  invoke: jest.fn().mockImplementation(() => Promise.resolve('Hello, Test!')),
}));

describe('App Component', () => {
  test('renders welcome message', () => {
    render(<App />);
    expect(screen.getByText('Welcome to Tauri!')).toBeInTheDocument();
  });

  test('updates input and calls greet function', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Enter a name...');
    const button = screen.getByRole('button', { name: 'Greet' });

    // Simulate user typing in the input
    userEvent.type(input, 'Test');

    // Simulate button click to invoke greet
    userEvent.click(button);

    // Await for the greet message to be updated
    await waitFor(() => {
      expect(screen.getByText('Hello, Test!')).toBeInTheDocument();
    });
  });
});
