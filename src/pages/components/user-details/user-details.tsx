import { FC } from 'react';
import { IUser } from '../../../models/IUser';
import { Card } from '../../../shared/components/Card/Card';
import './user-details.scss';

interface UserDetailsProps {
  user: IUser;
}
export const UserDetails: FC<UserDetailsProps> = ({
  user: { username, email, name },
}) => (
  <div className="user__details">
    <h4>User details</h4>
    <Card>
      <div className="user__details__username">username: {username}</div>
      <div className="user__details__name">name: {name}</div>
      <div className="user__details__email">email: {email}</div>
    </Card>
  </div>
);
