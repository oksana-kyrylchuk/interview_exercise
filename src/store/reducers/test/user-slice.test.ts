import { userReducer, UsersState, userActions } from '../user-slice';
import { usersListMock } from '../../test/mocks/mockData';

const initialState = {
  usersList: [],
  userDetails: null,
  isLoading: false,
  error: '',
};

test('return the initial state', () => {
  expect(userReducer(undefined, { type: undefined })).toEqual(initialState);
});

test('handle setting user details', () => {
  const previousState: UsersState = {
    ...initialState,
    usersList: usersListMock,
  };
  const action = userActions.setDetails(2);
  const expected = {
    ...previousState,
    userDetails: {
      email: 'kate94@gmail.com',
      id: 2,
      name: 'Kate Blanket',
      username: 'Katty',
    },
  };

  expect(userReducer(previousState, action)).toEqual(expected);
});

test('handle loading while users data fetching', () => {
  const previousState: UsersState = {
    ...initialState,
    isLoading: false,
  };
  const action = userActions.userFetching();
  const expected = {
    ...previousState,
    isLoading: true,
  };

  expect(userReducer(previousState, action)).toEqual(expected);
});

test('handle users data fetching success', () => {
  const previousState: UsersState = {
    ...initialState,
    usersList: [],
  };
  const action = userActions.userFetchingSuccess(usersListMock);
  const expected = {
    ...previousState,
    usersList: usersListMock,
  };

  expect(userReducer(previousState, action)).toEqual(expected);
});

test('handle users data fetching error', () => {
  const errorMessage = 'something went wrong';
  const previousState: UsersState = {
    ...initialState,
    error: '',
  };
  const action = userActions.userFetchingError(errorMessage);
  const expected = {
    ...previousState,
    error: errorMessage,
  };

  expect(userReducer(previousState, action)).toEqual(expected);
});
