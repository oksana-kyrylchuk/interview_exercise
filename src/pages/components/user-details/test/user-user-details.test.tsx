import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { UseUserDetails } from '../use-user-details';
import { store } from '../../../../store/test/mocks/mockStore';

test('renders UserDetails component', async () => {
  render(
    <Provider store={store}>
      <UseUserDetails />
    </Provider>,
  );

  const userDetailName = screen.getByText('name: John Doe');
  expect(userDetailName).toBeInTheDocument();
});
