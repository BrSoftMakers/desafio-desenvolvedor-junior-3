import styles from './styles.module.scss';
import Button from '../Button';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

export default function NavBar() {
  const { setFilterPosts, filterPosts } = useContext(AppContext);

  const handleClick = () => {
    setFilterPosts?.((oldState: boolean) => !oldState);
  };

  return (
    <nav className={styles.nav}>
      <Button
        text={filterPosts ? 'Todos os Posts' : 'Meu Posts'}
        onClick={handleClick}
        customClass={`${styles.btnFilterOn} ${
          filterPosts ? styles.btnFilterOff : ''
        }`}
      />
    </nav>
  );
}
