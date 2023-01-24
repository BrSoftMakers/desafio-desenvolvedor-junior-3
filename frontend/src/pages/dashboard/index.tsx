import { useState } from 'react'
import { canSSRAuth } from "../../utils/canSSRAuth"
import Head from 'next/head'
import { Header } from '../../components/Header'
import styles from './styles.module.scss'

import { setupAPIClient } from '../../services/api'
import {ImSortAmountAsc} from 'react-icons/im'
import { ModalProps } from '../../components/ModalPost'

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

    const [postList, setPostList] = useState(post || []);

    const [modalItem, setModalItem] = useState<PostAuthorProps[]>()
    const [modalVisible, setModalVisible] = useState(false)

    function handleCloseModal() {
        setModalVisible(false)
    }

    async function handleModalView(id: string) {
        const apiClient = setupAPIClient();
        //console.log(id)
        const response = await apiClient.get('/post', {
            params: {
                post_id: id
            }
        })

        setModalItem(response.data);
        setModalVisible(true);
    }

    async function handleOrderList(){
        const apiClient = setupAPIClient();
        
        const response = await apiClient.get('/post/asc')
        window.location.href
        setPostList(response.data)
    }


    Modal.setAppElement('#__next');

    return (
        <>
            <Head>
                <title> Painel - OBlog</title>
            </Head>
            <div>
                <Header />

                <main className={styles.container}>
                    <div className={styles.containerHeader}>
                        <h1>Ultimas publicações</h1>
                        <button onClick={handleOrderList}><ImSortAmountAsc size={20} color="#3fffa3"/></button>
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
                                    <div className={styles.orderInfo}>
                                        <span>{item.title}</span>
                                        <label>{item.caption}</label>
                                    </div>
                                </button>
                            </section>
                        ))}


                    </article>

                </main>

                {modalVisible && (
                    <ModalProps
                        isOpen={modalVisible}
                        onRequestClose={handleCloseModal}
                        post={modalItem}
                    />
                )}
            </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {

    const apiClient = setupAPIClient(ctx);

    const response = await apiClient.get('/post/desc');

    //console.log(response.data)

    return {
        props: {
            post: response.data
        }
    }
})