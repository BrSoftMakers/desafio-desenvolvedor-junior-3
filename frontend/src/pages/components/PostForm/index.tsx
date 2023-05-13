import React, {
  MouseEvent,
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
};

type CreatePostType = {
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

  const [postForm, setPostForm] = useState<CreatePostType>({
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

    setPostForm((oldState: CreatePostType): CreatePostType => {
      isValidFields(value, name, requiredFields[name], setPostForm);

      return {
        ...oldState,
        [name]: value,
      };
    });
  };

  const handleSavePost = useCallback(
    async (event: React.MouseEvent) => {
      event.preventDefault();

      const data = {
        title: postForm?.title?.trim(),
        text: postForm?.text?.trim(),
      };

      setIsLoading?.(true);

      try {
        await postService.savePost(data);
        notification.sucess('Post criado com sucesso');
        setRefetch((oldState) => oldState + 1);
      } catch (error: any) {
        const { response } = error;

        if (response?.status === 409) {
          setPostForm((oldState: CreatePostType) => ({
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
      }
    },
    [
      authService,
      navigate,
      notification,
      postForm?.text,
      postForm?.title,
      postService,
      setIsLoading,
      setRefetch,
    ]
  );

  const handleCancel = () => {
    setPostForm({
      title: '',
      titleError: '',
      titleIsValid: '',
      text: '',
      textError: '',
      textIsValid: '',
    });
    setOpenPostForm(false);
  };

  useEffect(() => {
    Modal.setAppElement('body');
  }, []);

  const handleButtonState = useCallback(() => {
    return postForm?.textIsValid === 'ok' && postForm?.titleIsValid === 'ok';
  }, [postForm?.textIsValid, postForm?.titleIsValid]);

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
          <Button onClick={handleCancel} text="Cancelar" />
          <Button
            onClick={handleSavePost}
            text="Postar"
            isDisabled={!handleButtonState()}
          />
        </div>
      </form>
    </Modal>
  );
}
