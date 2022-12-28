import { render } from '@testing-library/react';
import { IUser } from '../../../../models/IUser';
import { UserItem } from '../../user-item/user-item';
import { UsersList } from '../users-list';

const usersListMock: IUser[] = [
  {
    id: 1,
    name: 'John Doe',
    username: 'Johnny',
    email: 'john.doe@gmail.com',
  },
];
test('renders data correctly', () => {
  render(<UsersList users={usersListMock} showUserDetails={jest.fn} />);

  const item = (
    <UserItem user={usersListMock[0]} handleClick={jest.fn} />
  ) as unknown as HTMLElement;
  expect(item).toBeInTheDocument();
});
