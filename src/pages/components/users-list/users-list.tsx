import React, { FC } from 'react';
import { IUser } from '../../../models/IUser';
import { UserItem } from '../user-item/user-item';

interface UserListProps {
  users: IUser[];
  showUserDetails: (id: number) => void;
}
export const UsersList: FC<UserListProps> = ({ users, showUserDetails }) => (
  <div className="users__list">
    <h4>List of users</h4>
    {users.map((user) => (
      <UserItem key={user.id} user={user} handleClick={showUserDetails} />
    ))}
  </div>
);
