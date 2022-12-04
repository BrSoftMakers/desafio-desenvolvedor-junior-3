import { Field } from "formik";
import { Container } from './styles';
import { AiOutlineMail } from 'react-icons/ai'

interface Input {
  name:string
  placeholder:string
  type:string
  error:string | any
  label: string
}

export function Input({name,placeholder,type,error,label}:Input) {
  return (
    <Container>
      <div>{!!error && <span> {error}</span>}</div>
    <label>{label}</label>
    <AiOutlineMail/>
    <Field type={type}id={name} name={name} placeholder={placeholder}/>
    </Container>
  );
}
