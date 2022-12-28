import React from 'react';
import './Card.scss';

interface CardProps {
  children: JSX.Element | JSX.Element[];
}
export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="card" data-testid="card">
      {children}
    </div>
  );
};
