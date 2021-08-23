import Swal from 'sweetalert2';
import { Layout } from '../../../../components/layout/Layout';
import { useAuth } from '../../../../hooks/useAuth';
import useForm from '../../../../hooks/useForm';
import { CreatePostContent } from '../components/CreatePostContent';
import CreatePostAPI from '../service/CreatePost';

export const CreatePostContainer = (): JSX.Element => {
  const dataPost = {
    title: '',
    text: '',
  };
  const { userId } = useAuth();
  const { values, handleChange, clearForm } = useForm(dataPost);

  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();

    try {
      const user = userId;

      CreatePostAPI({ ...values, user });

      Swal.fire('Postagem publicada', '', 'success');
    } catch (err) {
      Swal.fire(
        'Erro',
        'Aparentemente aconteceu algum problema, tente novamente.',
        'error',
      );
    }

    clearForm();
  }

  return (
    <Layout>
      <CreatePostContent
        values={values}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Layout>
  );
};
