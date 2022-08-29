import React, { useState } from 'react';
import { reqPost, setToken } from '../../services/API';

import './create.css';

export default function CreatePost() {
  const [requisition, setRequisition] = useState({
    title: '',
    content: '',
  });

  const { title, content } = requisition;

  const Publish = async () => {
    const token = localStorage.getItem('token') || '';
    if (token !== '') {
       setToken(token);
    }
    try {
      await reqPost('/posts', { title, content });
    } catch (err) {
      console.log(err);
    }
    window.location.reload(false);
  }

  const handleChange = ({target}) => {
    const { name, value } = target;
    setRequisition({...requisition, [name]: value });
  }

  return(
    <div className='forms'>
      <input
        className='inputTitle'
        type="text"
        name="title"
        id="title"
        value={ title }
        placeholder="Titulo do Post"
        onChange={ handleChange }
      />
      <input
        className='inputContent'
        type="text"
        name="content"
        id="content"
        value={ content }
        placeholder="Conteudo do Post"
        onChange={ handleChange }
      />
      <input
        type="submit"
        onClick={() => Publish()}
        className='btnP'
        value="Publish"
      />
    </div>
  )
}