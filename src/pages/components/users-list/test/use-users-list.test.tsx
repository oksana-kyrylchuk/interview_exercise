import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { UseUsersList } from '../use-users-list';
import { store } from '../../../../store/test/mocks/mockStore';

test('renders UseUsersList component', () => {
  render(
    <Provider store={store}>
      <UseUsersList />
    </Provider>,
  );

  const header = screen.getByText('List of users');
  const list = screen.getAllByTestId('user-item');
  expect(header).toBeInTheDocument();
  expect(list.length).toEqual(2);
});
