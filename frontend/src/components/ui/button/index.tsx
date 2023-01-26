import styles from './styles.module.scss';
import { ReactNode, ButtonHTMLAttributes } from 'react';

import { FaSpinner } from 'react-icons/fa'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean,
    children: ReactNode
}

export function Button({ loading, children, ...rest }: ButtonProps) {
    return (
        <button
            className={styles.button}
            disabled={loading}
            {...rest}
        >
            {loading ? (//Condicional se verdadiro mostra o icon de carregamento
                <FaSpinner color='#FFF' size={16} />
            ) : //Caso falso mostra o 'children' variável para stributo html
                <a className={styles.buttonText}>
                    {children}
                </a>
            }
        </button>
    )
}