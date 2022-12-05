import { Field } from "formik";
import { Container } from './styles';
import { AiOutlineMail } from 'react-icons/ai'
import { InputInterface } from "../../interfaces/Input";



export function Input({ name, placeholder, type, error, label }: InputInterface) {
  return (
    <Container>
      <div>{!!error && <span> {error}</span>}</div>
      <label>{label}</label>
      <AiOutlineMail />
      <Field type={type} id={name} name={name} placeholder={placeholder} />
    </Container>
  );
}
