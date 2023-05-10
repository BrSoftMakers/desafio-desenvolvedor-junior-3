import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthService from '../../service/AuthService';

export default function withAuthentication<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const authService = new AuthService();

  return function WithAuthentication(props: P) {
    if (!authService.isLoggedIn()) {
      return <Navigate to={'/login'} />;
    }

    return <WrappedComponent {...props} />;
  };
}
