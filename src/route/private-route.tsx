import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAccount } from '../context/account-context';

interface PrivateRouteProps {
  children: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const location = useLocation();
  const { token } = useAccount();

  if (!token) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
