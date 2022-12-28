import { setupStore } from '../index';

test('set initial store', () => {
  const state = setupStore().getState().userReducer;
  expect(state.usersList).toEqual([]);
  expect(state.userDetails).toEqual(null);
  expect(state.isLoading).toEqual(false);
  expect(state.error).toEqual('');
});
