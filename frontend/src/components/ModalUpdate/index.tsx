import Modal from 'react-modal'
import styles from './styles.module.scss'

import { FiX } from 'react-icons/fi'
import { useState, useContext } from 'react'
import { PostAuthorProps } from '../../pages/dashboard'

interface ModalUpdateProps {
    isOpen: boolean;
    onRequestClose: () => void;
    post: PostAuthorProps[];
    handleUpdatePost: (id: string, title: string, caption: string, description: string) => void
}

export function ModalUpdateProps({ isOpen, onRequestClose, post, handleUpdatePost }: ModalUpdateProps) {

    const customStyles = {
        content: {
            top: '50%',
            botton: 'auto',
            left: '50%',
            right: 'auto',
            height: '500px',
            padding: '30px',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#1d1d2e'
        }
    }

    let [title, setTitle] = useState(post[0].title || '');
    const [caption, setCaption] = useState(post[0].caption || '');
    const [description, setDescription] = useState(post[0].description || '');
    return (

        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
        >

            <div>

                <main className={styles.container}>
                    <h1>Editando postagem</h1>
                    {post.map(item => (
                        <form className={styles.form} key={item.id}>

                            <input
                                type="text"
                                placeholder='Digite o titulo da postagem'
                                className={styles.input}
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                
                            />
                            <input
                                type="text"
                                placeholder='Subtítulo'
                                className={styles.input}
                                value={caption}
                                onChange={(e) => setCaption(e.target.value)}
                            />
                            <textarea
                                placeholder='Descreva sua postagem'
                                className={styles.input}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <button
                                className={styles.buttonAdd}
                                type='submit'
                                onClick={() => handleUpdatePost(post[0].id, title, caption, description)}
                            >
                                Salvar
                            </button>
                        </form>
                    ))}
                </main>
            </div>

        </Modal>
    )
}