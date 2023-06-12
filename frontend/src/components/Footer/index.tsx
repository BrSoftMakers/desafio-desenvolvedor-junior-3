import styles from './styles.module.scss';
import NavBar from '../NavBar';
import AppContext from '../../context/AppContext';
import { useContext } from 'react';

export default function Footer() {
  const {
    windowSize: { width },
  } = useContext(AppContext);

  return typeof width === 'number' && width < 720 ? (
    <footer className={styles.footer}>
      <NavBar />
    </footer>
  ) : null;
}
