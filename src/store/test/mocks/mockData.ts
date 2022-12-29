import { IUser } from '../../../models/IUser';

export const userMock: IUser = {
  id: 1,
  name: 'John Doe',
  username: 'Johnny',
  email: 'john.doe@gmail.com',
};
export const usersListMock: IUser[] = [
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
export const storeDataMock = {
  userReducer: {
    usersList: usersListMock,
    userDetails: usersListMock[0],
    isLoading: false,
    error: '',
  },
};
