import { render, screen } from '@testing-library/react';
import { IUser } from '../../../../models/IUser';
import { UserDetails } from '../user-details';

const userMock: IUser = {
  id: 1,
  name: 'John Doe',
  username: 'Johnny',
  email: 'john.doe@gmail.com',
};
test('renders data correctly', () => {
  render(<UserDetails user={userMock} />);

  const name = screen.getByText('name: John Doe');
  const surname = screen.getByText('username: Johnny');
  const email = screen.getByText('email: john.doe@gmail.com');

  expect(name).toBeInTheDocument();
  expect(surname).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
