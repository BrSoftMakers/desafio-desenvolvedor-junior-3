import { useState, useContext } from 'react'
import { canSSRAuth } from "../../utils/canSSRAuth"
import Head from 'next/head'
import { Header } from '../../components/Header'
import styles from './styles.module.scss'

import { HiOutlinePencilSquare, HiOutlineTrash } from 'react-icons/hi2'

import { setupAPIClient } from '../../services/api'

import { ModalProps } from '../../components/ModalPost'
import {ModalUpdateProps} from '../../components/ModalUpdate'
import { AuthContext } from '../../contexts/AuthContext'

import Modal from 'react-modal'
import { toast } from 'react-toastify'

type PostProps = {
    id: string;
    title: string;
    caption: string;
    description: string;
    authorId: string;
    createdAt: Date;
}

interface HomeProps {
    post: PostProps[];
}

export type PostAuthorProps = {
    id: string;
    createdAt: Date;
    title: string;
    caption: string;
    description: string;
    authorId: string;
    author: {
        id: string;
        name: string;
    }
}

export default function Dashboard({ post }: HomeProps) {

    const { user } = useContext(AuthContext)

    const [postList, setPostList] = useState(post || []);

    const [modalItem, setModalItem] = useState<PostAuthorProps[]>()
    const [modalVisible, setModalVisible] = useState(false)

    function handleCloseModal() {
        setModalVisible(false)
    }

    async function handleModalView(id: string) {
        const apiClient = setupAPIClient();
        console.log(id)
        const response = await apiClient.get('/post', {
            params: {
                post_id: id
            }
        })

        setModalItem(response.data);
        setModalVisible(true);
    }

    async function handleModalUpdate(id: string) {
        const apiClient = setupAPIClient();
        console.log(id)
        const response = await apiClient.get('/post', {
            params: {
                post_id: id
            }
        })

        setModalItem(response.data);
        setModalVisible(true);
    }

    async function handleRemovePost(id: string) {
        const apiClient = setupAPIClient();
        await apiClient.delete('/post/remove', {
            params: {
                post_id: id
            }
        })
        toast.success("Postagem deletada com sucesso!")
        const response = await apiClient.get('/post/me', {
            params: {
                user_id: user.id
            }
        });

        setPostList(response.data);
        setModalVisible(false);
    }

    async function handleUpdatePost(id:string, title:string, caption: string, description: string) {
        const apiClient = setupAPIClient();
        console.log(title);
        await apiClient.put('/post/update', {
            post_id: id,
            title: title,
            caption: caption,
            description: description
        })

        toast.success("Sua edição foi concluída!")
        const response =await apiClient.get('/post/me', {
            params: {
                user_id: user.id
            }
        })
        setPostList(response.data)
        setModalVisible(false);
    }


    Modal.setAppElement('#__next');

    return (
        <>
            <Head>
                <title> Meu Painel - OBLog</title>
            </Head>
            <div>
                <Header />

                <main className={styles.container}>
                    <div className={styles.containerHeader}>
                        <h1>Minhas publicações</h1>

                    </div>

                    <article className={styles.listOrders}>

                        {postList.length === 0 && (
                            <span className={styles.emptyList}>
                                Nenhuma postagem até o momento...
                            </span>
                        )}

                        {postList.map(item => (
                            <section key={item.id} className={styles.orderItem}>
                                <button onClick={() => handleModalView(item.id)}>
                                    <div className={styles.tag}></div>
                                    <span>{item.title}</span>
                                </button>
                                <div className={styles.actions}>
                                    <button onClick={() => handleRemovePost(item.id)}>
                                        <HiOutlineTrash color='#f34748' />
                                    </button>
                                    <button onClick={() => handleModalUpdate(item.id)}>
                                        <HiOutlinePencilSquare color='#ffdb58' />
                                    </button>
                                </div>
                            </section>
                        ))}


                    </article>

                </main>

                {/* {modalVisible && (
                    <ModalProps
                        isOpen={modalVisible}
                        onRequestClose={handleCloseModal}
                        post={modalItem}
                        handleRemovePost={handleRemovePost}
                    />
                )} */}
                {modalVisible && (
                    <ModalUpdateProps
                        isOpen={modalVisible}
                        onRequestClose={handleCloseModal}
                        post={modalItem}
                        handleUpdatePost={handleUpdatePost}
                    />
                )}
            </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    const apiClient = setupAPIClient(ctx);

    const user = await apiClient.get('/me')

    const response = await apiClient.get('/post/me', {
        params: {
            user_id: user.data.id
        }
    });

    //console.log(response.data)

    return {
        props: {
            post: response.data
        }
    }
})