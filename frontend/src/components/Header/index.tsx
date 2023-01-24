import { useContext } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

import { FiLogOut} from "react-icons/fi"

import { AuthContext } from '../../contexts/AuthContext'

export function Header() {

    const {signOut} = useContext(AuthContext);
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/dashboard" legacyBehavior>
                    <img src="/logo.png" width={190} height={60}/>
                </Link>
                {/* <h1>{user?.name}</h1> */}
                <nav className={styles.menuNav}>
                    <Link href="/my" legacyBehavior>
                        <a>Minhas postagem</a>
                    </Link>
                    <Link href="/posts" legacyBehavior>
                        <a>Nova postagem</a>
                    </Link>

                    <button onClick={signOut}>
                        <FiLogOut color='#FFF' size={24}/>
                    </button>
                </nav>
            </div>
        </header>
    )
}