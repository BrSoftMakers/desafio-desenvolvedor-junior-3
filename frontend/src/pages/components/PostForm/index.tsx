import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Modal from 'react-modal';
import Input from '../../../components/Input';
import { requiredFields } from '../../login';
import isValidFields from '../../../utils/handleInput';

import styles from './styles.module.scss';
import Button from '../../../components/Button';
import TextArea from '../../../components/TextArea';
import PostsService from '../../../service/PostsService';
import TostifyService from '../../../service/TostifyService';
import AppContext from '../../../context/AppContext';
import AuthService from '../../../service/AuthService';
import { useNavigate } from 'react-router-dom';

type PostFormProps = {
  openPostForm: boolean;
  setOpenPostForm: React.Dispatch<React.SetStateAction<boolean>>;
  editTitle?: string;
  editText?: string;
  postId?: string | null;
  setEditTitle?: React.Dispatch<React.SetStateAction<string>>;
  setEditText?: React.Dispatch<React.SetStateAction<string>>;
  setPostId?: React.Dispatch<React.SetStateAction<string | null>>;
};

type PostType = {
  title: string;
  titleError: string;
  titleIsValid: string;
  text: string;
  textError: string;
  textIsValid: string;
};

export default function PostForm({
  openPostForm,
  setOpenPostForm,
  editTitle,
  editText,
  postId,
  setEditTitle,
  setEditText,
  setPostId,
}: PostFormProps) {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0,0,0, 0.8)',
      zIndex: 1,
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgb(241,245,249)',
      width: '75%',
      height: '490px',
    },
  };

  const navigate = useNavigate();

  const { setRefetch, setIsLoading } = useContext(AppContext);

  const postService = useMemo(() => new PostsService(), []);
  const notification = useMemo(() => new TostifyService(), []);
  const authService = useMemo(() => new AuthService(), []);

  const [postForm, setPostForm] = useState<PostType>({
    title: '',
    titleError: '',
    titleIsValid: '',
    text: '',
    textError: '',
    textIsValid: '',
  });

  const handleClosePostForm = () => {
    setPostForm({
      title: '',
      titleError: '',
      titleIsValid: '',
      text: '',
      textError: '',
      textIsValid: '',
    });
    setEditTitle?.('');
    setEditText?.('');
    setPostId?.(null);
    setOpenPostForm(false);
  };

  const handleInput = (value: string, name: string): void => {
    const requiredFields: requiredFields = {
      text: true,
      title: true,
    };

    if (name === 'title' && value?.length > 30) {
      return;
    }

    if (value?.length > 3000) {
      return;
    }

    const { error, isValid } = isValidFields(value, name, requiredFields[name]);

    setPostForm((oldState: PostType): PostType => {
      return {
        ...oldState,
        [name]: value,
        [`${name}Error`]: error,
        [`${name}IsValid`]: isValid,
      };
    });
  };

  const handleSubmitPost = useCallback(
    async (event: React.MouseEvent) => {
      event.preventDefault();

      const data = {
        title: postForm?.title?.trim(),
        text: postForm?.text?.trim(),
      };

      setIsLoading?.(true);

      try {
        if (postId) {
          await postService.updatePost(data, postId);
        } else {
          await postService.savePost(data);
        }
        setRefetch((oldState) => oldState + 1);
        notification.sucess(postId ? 'Post Editado' : 'Post Criado.');
      } catch (error: any) {
        const { response } = error;

        if (response?.status === 409) {
          setPostForm((oldState: PostType) => ({
            ...oldState,
            titleError: response?.data?.message,
            titleIsValid: 'notOk',
          }));
        }

        if (response?.status === 401) {
          authService.logout();
          notification.sucess('Tempo de sessão expirado.');
          navigate('/login');
        }
      } finally {
        setIsLoading?.(false);
        handleClosePostForm();
      }
    },

    [
      authService,
      handleClosePostForm,
      navigate,
      notification,
      postForm?.text,
      postForm?.title,
      postId,
      postService,
      setIsLoading,
      setRefetch,
    ]
  );

  const handleButtonState = useCallback(() => {
    return postForm?.textIsValid === 'ok' && postForm?.titleIsValid === 'ok';
  }, [postForm?.textIsValid, postForm?.titleIsValid]);

  useEffect(() => {
    Modal.setAppElement('body');
  }, []);

  useEffect(() => {
    if (editTitle && editText) {
      setPostForm((oldState: PostType) => ({
        ...oldState,
        title: editTitle,
        titleError: '',
        titleIsValid: 'ok',
        text: editText,
        textError: '',
        textIsValid: 'ok',
      }));
    }
  }, [editText, editTitle]);

  return (
    <Modal
      isOpen={openPostForm}
      onRequestClose={handleClosePostForm}
      style={customStyles}
    >
      <form className={styles.postForm}>
        <div className={styles.inputsContainer}>
          <Input
            label="Título"
            placeholder="Título do Post"
            name="title"
            value={postForm?.title}
            onChange={handleInput}
            errorMessage={postForm?.titleError}
            isValid={postForm?.titleIsValid}
          />
          <TextArea
            value={postForm?.text}
            placeholder="Hoje está um belo dia..."
            isValid={postForm?.textIsValid}
            name="text"
            errorMessage={postForm?.textError}
            onChange={handleInput}
            rows={postForm?.text.length >= 385 ? 7 : 4}
          />
        </div>

        <div className={styles.btnContainer}>
          <Button onClick={handleClosePostForm} text="Cancelar" />
          <Button
            onClick={handleSubmitPost}
            text={postId ? 'Editar Post' : 'Postar'}
            isDisabled={!handleButtonState()}
          />
        </div>
      </form>
    </Modal>
  );
}
