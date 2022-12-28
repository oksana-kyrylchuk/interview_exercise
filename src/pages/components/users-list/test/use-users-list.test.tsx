import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, screen, waitFor } from '@testing-library/react';
import { IUser } from '../../../../models/IUser';
import { UseUsersList } from '../use-users-list';

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
const userMock = {
  userReducer: {
    usersList: usersListMock,
    userDetails: {
      id: 1,
      name: 'John Doe',
      username: 'Johnny',
      email: 'john.doe@gmail.com',
    },
    isLoading: false,
    error: '',
  },
};

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(userMock);

test('renders UseUsersList component', async () => {
  render(
    <Provider store={store}>
      <UseUsersList />
    </Provider>,
  );

  const list = screen.getAllByTestId('user-list');
  await waitFor(() => expect(list.length).toEqual(2));
});
