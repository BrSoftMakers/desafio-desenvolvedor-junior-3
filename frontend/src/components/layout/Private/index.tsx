import React from 'react';
import styles from './styles.module.scss';
import Header from '../../Header';
import Footer from '../../Footer';

type PrivateLayoytProps = {
  children: React.ReactNode;
};

export default function PrivateLayout({ children }: PrivateLayoytProps) {
  return (
    <>
      <Header />
      <main className={styles.layoutContainer}>{children}</main>
      <Footer />
    </>
  );
}
