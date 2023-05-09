import React from 'react';
import styles from './styles.module.scss';

type PublicLayoutProps = {
  children: React.ReactNode;
};

export default function PublicLayout({ children }: PublicLayoutProps) {
  return <main className={styles.layoutContainer}>{children}</main>;
}
