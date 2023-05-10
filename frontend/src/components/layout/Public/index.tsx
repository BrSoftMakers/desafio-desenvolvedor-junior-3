import React, { useMemo } from 'react';
import styles from './styles.module.scss';
import AuthService from '../../../service/AuthService';
import { Navigate } from 'react-router-dom';

type PublicLayoutProps = {
  children: React.ReactNode;
};

export default function PublicLayout({ children }: PublicLayoutProps) {
  const authService = useMemo(() => new AuthService(), []);

  return authService.isLoggedIn() ? (
    <Navigate to="/home" />
  ) : (
    <main className={styles.layoutContainer}>{children}</main>
  );
}
