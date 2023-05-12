import styles from './styles.module.scss';
import NavBar from '../NavBar';
import AppContext from '../../context/AppContext';
import { useContext } from 'react';
import Button from '../Button';
import { AiOutlinePlusCircle } from 'react-icons/ai';

export default function Footer() {
  const {
    windowSize: { width },
  } = useContext(AppContext);

  const handleBtn = () => {
    console.log('oi');
  };

  return typeof width === 'number' && width < 720 ? (
    <footer className={styles.footer}>
      <NavBar />
      <Button text="Postar" onClick={handleBtn} customClass={styles.createPost}>
        <AiOutlinePlusCircle />
      </Button>
    </footer>
  ) : null;
}
