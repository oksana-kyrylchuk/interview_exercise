import { UserDetails } from './user-details';
import { useAppSelector } from '../../../hooks/redux';

export const UseUserDetails = () => {
  const user = useAppSelector((state) => state.userReducer.userDetails);

  return <>{user && <UserDetails user={user} />}</>;
};
