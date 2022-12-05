import { Field } from "formik";
import { Container } from './styles';
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai'
import { BiLink } from "react-icons/bi"
import { IoEyeSharp } from 'react-icons/io5'
import { MdTitle } from 'react-icons/md'
import { FaEyeSlash } from 'react-icons/fa'
import { InputInterface } from "../../interfaces/Input";
import { useState } from "react";



export function Input({ name, placeholder, type, error, label }: InputInterface) {

  const [eyes, setEyes] = useState(true)
  function eyesOpen() {
    setEyes(true)

  }

  function closeOpen() {
    setEyes(false)

  }

  return (
    <Container>

      <div>{!!error && <span> {error}</span>}</div>
      <label>{label}</label>

      {type === "password" && (
        <>
          {eyes === true ? <IoEyeSharp onClick={closeOpen} /> : <FaEyeSlash onClick={eyesOpen} />}
          <Field type={eyes === true ? "text" : "password"} id={name} name={name} placeholder={placeholder} />
        </>
      )
      }

      {name === "email" && (
        <>
          <AiOutlineMail />
          <Field type={type} id={name} name={name} placeholder={placeholder} />
        </>

      )}
      {name === "name" && (
        <>
          <AiOutlineUser />
          <Field type={type} id={name} name={name} placeholder={placeholder} />
        </>

      )}

      {name === "img" && (
        <>
          <BiLink />
          <Field type={type} id={name} name={name} placeholder={placeholder} />
        </>

      )}

      {name === "title" && (
        <>
          <MdTitle />
          <Field type={type} id={name} name={name} placeholder={placeholder} />
        </>

      )}

    </Container>
  );
}
