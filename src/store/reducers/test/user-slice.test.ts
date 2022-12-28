import { userReducer, UsersState, userActions } from '../user-slice';
import { IUser } from '../../../models/IUser';
const initialState = {
  usersList: [],
  userDetails: null,
  isLoading: false,
  error: '',
};

const usersList: IUser[] = [
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
test('return the initial state', () => {
  expect(userReducer(undefined, { type: undefined })).toEqual(initialState);
});

test('handle setting user details', () => {
  const previousState: UsersState = {
    ...initialState,
    usersList,
  };

  const expected = {
    ...previousState,
    userDetails: {
      email: 'kate94@gmail.com',
      id: 2,
      name: 'Kate Blanket',
      username: 'Katty',
    },
  };

  expect(userReducer(previousState, userActions.setDetails(2))).toEqual(
    expected,
  );
});

test('handle loading while users data fetching', () => {
  const previousState: UsersState = {
    ...initialState,
    isLoading: false,
  };

  const expected = {
    ...previousState,
    isLoading: true,
  };

  expect(userReducer(previousState, userActions.userFetching())).toEqual(
    expected,
  );
});

test('handle users data fetching success', () => {
  const previousState: UsersState = {
    ...initialState,
    usersList: [],
  };

  const expected = {
    ...previousState,
    usersList,
  };

  expect(
    userReducer(previousState, userActions.userFetchingSuccess(usersList)),
  ).toEqual(expected);
});

test('handle users data fetching error', () => {
  const errorMessage = 'something went wrong';
  const previousState: UsersState = {
    ...initialState,
    error: '',
  };

  const expected = {
    ...previousState,
    error: errorMessage,
  };

  expect(
    userReducer(previousState, userActions.userFetchingError(errorMessage)),
  ).toEqual(expected);
});
