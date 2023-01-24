import Modal from 'react-modal'
import styles from './style.module.scss'

import { FiX } from 'react-icons/fi'
import { useState, useContext } from 'react'
import { PostAuthorProps } from '../../pages/dashboard'

interface ModalPostProps {
    isOpen: boolean;
    onRequestClose: () => void;
    post: PostAuthorProps[];
}

export function ModalProps({ isOpen, onRequestClose, post }: ModalPostProps) {
    const [modalVisible, setModalVisible] = useState(false)
    const customStyles = {
        content: {
            top: '50%',
            botton: 'auto',
            left: '50%',
            right: 'auto',
            padding: '30px',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#1d1d2e'
        }
    }
    async function handleModalViewUpdate(id: string) {
        setModalVisible(true);
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
        >

            <button
                type='button'
                onClick={onRequestClose}
                className='react-modal-close'
                style={{ background: 'transparent', border: 0 }}
            >
                <FiX size={45} color='#f34748' />
            </button>

            <div className={styles.container}>
                <h1>Postagem completa</h1>
                <span className={styles.table}>
                    Autor: <strong>{post[0]?.author?.name}</strong>
                </span>
                {post.map(item => (
                    <section key={item.id} className={styles.containerItem}>
                        <span>{item.title} - <strong>{item.caption}</strong></span>
                        <span className={styles.description}>{item.description}</span>

                    </section>
                ))}

            </div>

        </Modal>
    )
}