import React, { FC } from 'react';
import { UseUsersList } from './pages/components/users-list/use-users-list';
import { UseUserDetails } from './pages/components/user-details/use-user-details';
import './App.scss';

export const App: FC = () => (
  <div className="app">
    <UseUsersList />
    <UseUserDetails />
  </div>
);
