import { useAppSelector } from '../../../hooks/redux';
import { UserDetails } from './user-details';

export const UseUserDetails = () => {
  const user = useAppSelector((state) => state.userReducer.userDetails);

  return <>{user && <UserDetails user={user} />}</>;
};
