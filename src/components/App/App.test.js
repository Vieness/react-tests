import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

import userEvent from '@testing-library/user-event';

test('renders learn react link', () => {
  render(<App />);
  expect(screen.getByRole('list')).toBeInTheDocument();
});

test('typing in searchbox works', () => {
  render(<App />);
  expect(screen.queryByDisplayValue(/React/)).toBeNull();
  userEvent.type(screen.getByRole('textbox'), 'React');

  expect(screen.queryByDisplayValue(/React/)).toBeInTheDocument();
});
test('search filter is working', async () => {
  render(<App />);
  expect(screen.getByText(/Vue/)).toBeInTheDocument();
  expect(screen.getByText(/JavaScript/)).toBeInTheDocument();

  userEvent.type(screen.getByRole('textbox'), 'script')

  await waitFor(() => {
    // Assertions after the state updates
    expect(screen.queryByText(/Vue/)).toBeNull();
    expect(screen.queryByText(/JavaScript/)).toBeInTheDocument();
  });


});
test('App snapshot', () => {
  const app = render(<App/>

  );
  expect(app).toMatchSnapshot();
})

