import { render, screen } from '@testing-library/react';
import { usersListMock } from '../../../../store/test/mocks/mockData';
import { UsersList } from '../users-list';

test('renders list of 2 users', () => {
  render(<UsersList users={usersListMock} showUserDetails={jest.fn} />);

  const list = screen.getAllByTestId('user-item');
  expect(list.length).toEqual(2);
});
