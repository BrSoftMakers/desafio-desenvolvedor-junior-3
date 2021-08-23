/* eslint-disable camelcase */
import React from 'react';
import Swal from 'sweetalert2';
import { useLocation, useHistory } from 'react-router-dom';
import { Layout } from '../../../../components/layout/Layout';
import useForm from '../../../../hooks/useForm';
import { EditPostContent } from '../components/EditPostContent';
import EditPostAPI from '../service/EditPost';

interface User {
  id_user: string;
  username: string;
  fullName: string;
  age: number;
  createdAt: string;
}

interface Post {
  id_post: string;
  title: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  dataUser: User;
}

interface LocationProps {
  post: Post;
}

export const EditPostContainer = (): JSX.Element => {
  const location = useLocation<LocationProps>();
  const history = useHistory();
  const { post } = location.state;

  const dataPost = {
    title: post.title,
    text: post.text,
  };

  const { values, handleChange } = useForm(dataPost);

  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();

    console.log(post);

    try {
      EditPostAPI(post.id_post, values);

      Swal.fire('Postagem atualizada com sucesso', '', 'success');
      history.push('mural');
    } catch (err) {
      Swal.fire(
        'Erro',
        'Aparentemente aconteceu algum problema, tente novamente.',
        'error',
      );
    }
  }

  return (
    <Layout>
      <EditPostContent
        values={values}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Layout>
  );
};
