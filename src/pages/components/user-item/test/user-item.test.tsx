import { fireEvent, render, screen } from '@testing-library/react';
import { UserItem } from '../user-item';
import { userMock } from '../../../../store/test/mocks/mockData';

test('renders name correctly', () => {
  render(<UserItem user={userMock} handleClick={jest.fn()} />);

  const name = screen.getByText('John Doe');
  expect(name).toBeInTheDocument();
});

test('handleClick with id', () => {
  const handleClickMock = jest.fn();
  render(<UserItem user={userMock} handleClick={handleClickMock} />);

  const name = screen.getByText('John Doe');
  fireEvent.click(name);
  expect(handleClickMock).toBeCalledWith(userMock.id);
});
