import { render, screen } from '@testing-library/react';
import { IUser } from '../../../../models/IUser';
import { UsersList } from '../users-list';

const usersListMock: IUser[] = [
  {
    id: 1,
    name: 'John Doe',
    username: 'Johnny',
    email: 'john.doe@gmail.com',
  },
  {
    id: 2,
    name: 'Kate Blanket',
    username: 'Katty',
    email: 'kate94@gmail.com',
  },
];

test('renders list of 2 users', () => {
  render(<UsersList users={usersListMock} showUserDetails={jest.fn} />);

  const list = screen.getAllByTestId('user-item');
  expect(list.length).toEqual(2);
});
