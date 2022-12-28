import { useEffect } from 'react';
import { fetchUsers, setDetails } from '../../../store/reducers/user-actions';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { UsersList } from './users-list';

export const UseUsersList = () => {
  const dispatch = useAppDispatch();
  const { usersList, isLoading, error } = useAppSelector(
    (state) => state.userReducer,
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const showUserDetails = (id: number) => dispatch(setDetails(id));

  return (
    <>
      {isLoading && <h4>Loading...</h4>}
      {error && <h3>{error}</h3>}
      <UsersList users={usersList} showUserDetails={showUserDetails} />
    </>
  );
};
