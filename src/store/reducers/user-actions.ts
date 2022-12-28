import axios from 'axios';
import { IUser } from '../../models/IUser';
import { AppDispatch } from '../index';
import { userActions } from './user-slice';

const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) {
    return error.message;
  }
  return String(error);
};
export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userActions.userFetching());
    const response = await axios.get<IUser[]>(
      'https://jsonplaceholder.typicode.com/users',
    );
    dispatch(userActions.userFetchingSuccess(response.data));
  } catch (e) {
    dispatch(userActions.userFetchingError(getErrorMessage(e)));
  }
};

export const setDetails = (id: number) => (dispatch: AppDispatch) => {
  dispatch(userActions.setDetails(id));
};
