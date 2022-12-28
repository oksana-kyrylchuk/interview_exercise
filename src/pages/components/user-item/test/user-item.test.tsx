import { fireEvent, render, screen } from '@testing-library/react';
import { IUser } from '../../../../models/IUser';
import { UserItem } from '../user-item';

const userMock: IUser = {
  id: 1,
  name: 'John Doe',
  username: 'Johnny',
  email: 'john.doe@gmail.com',
};
test('renders name correctly', () => {
  render(<UserItem user={userMock} handleClick={jest.fn()} />);

  const name = screen.getByText('John Doe');
  expect(name).toBeInTheDocument();
});

test('onCLick should handleClick with id', () => {
  const handleClickMock = jest.fn();
  render(<UserItem user={userMock} handleClick={handleClickMock} />);

  const name = screen.getByText('John Doe');
  fireEvent.click(name);
  expect(handleClickMock).toBeCalledWith(userMock.id);
});
