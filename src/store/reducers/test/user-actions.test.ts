import { setupStore } from '../../index';
import { fetchUsers, getErrorMessage, setDetails } from '../user-actions';

test('return message as a string type', () => {
  const error = { message: 'error text' } as unknown;
  const result = getErrorMessage(error);
  expect(typeof result).toEqual('string');
});

test('return message from error object', () => {
  const error = new Error('Something went wrong');
  const result = getErrorMessage(error);
  expect(typeof result).toEqual('string');
});

test('set details', () => {
  const store = setupStore();
  const dispatchSpy = jest.spyOn(store, 'dispatch');
  const expected = { type: 'users/setDetails', payload: 2 };

  setDetails(2)(store.dispatch);
  expect(dispatchSpy).toBeCalled();
  expect(dispatchSpy).toBeCalledWith(expected);
});

test('fetch users', () => {
  const store = setupStore();
  const dispatchSpy = jest.spyOn(store, 'dispatch');
  const expected = { type: 'users/userFetching' };

  fetchUsers()(store.dispatch);
  expect(dispatchSpy).toBeCalled();
  expect(dispatchSpy).toBeCalledWith(expected);
});
