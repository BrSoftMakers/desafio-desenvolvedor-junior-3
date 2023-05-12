import React, { MouseEvent, useEffect, useState } from 'react';
import Modal from 'react-modal';
import Input from '../../../components/Input';
import { requiredFields } from '../../login';
import isValidFields from '../../../utils/handleInput';

import styles from './styles.module.scss';
import Button from '../../../components/Button';
import TextArea from '../../../components/TextArea';

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

  const handleSavePost = (event: React.MouseEvent) => {
    event.preventDefault();
  };

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
          <Button onClick={handleSavePost} text="Postar" />
        </div>
      </form>
    </Modal>
  );
}
