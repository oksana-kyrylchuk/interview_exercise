import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import { UseUserDetails } from '../use-user-details';

const userMock = {
  userReducer: {
    usersList: [
      {
        id: 1,
        name: 'John Doe',
        username: 'Johnny',
        email: 'john.doe@gmail.com',
      },
    ],
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
const mockStore = configureStore();

const store = mockStore(userMock);
test('renders UserDetails component', async () => {
  render(
    <Provider store={store}>
      <UseUserDetails />
    </Provider>,
  );

  const userDetailName = screen.getByText('name: John Doe');
  expect(userDetailName).toBeInTheDocument();
});
