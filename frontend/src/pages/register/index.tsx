import { useCallback, useState } from 'react';
import Input from '../../components/Input';

import styles from './styles.module.scss';
import isValidFields from '../../utils/handleInput';
import Button from '../../components/Button';
import UserService from '../../service/UserService';

type FormRegisterType = {
  name: string;
  nameError: string;
  nameIsValid: string;
  email: string;
  emailError: string;
  emailIsValid: string;
  password: string;
  passwordError: string;
  passwordIsValid: string;
};

interface requiredFields {
  [key: string]: boolean;
}

export default function Register() {
  const userService = new UserService('http://localhost:5200');

  const [form, setForm] = useState<FormRegisterType>({
    name: '',
    nameError: '',
    nameIsValid: '',
    email: '',
    emailError: '',
    emailIsValid: '',
    password: '',
    passwordError: '',
    passwordIsValid: '',
  });

  const handleInput = (value: string, name: string): void => {
    const requiredFields: requiredFields = {
      name: true,
      password: true,
      email: true,
    };

    if (name === 'password' && value?.length > 10) {
      return;
    }
    if (value?.length > 30) {
      return;
    }

    setForm((oldState: FormRegisterType): FormRegisterType => {
      isValidFields(value, name, requiredFields[name], setForm);

      return {
        ...oldState,
        [name]: value,
      };
    });
  };

  const handleClick = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
      event.preventDefault();

      const data = {
        name: form?.name,
        password: form?.password,
        email: form?.email,
      };

      try {
        const response = await userService.login('/register', data);
        console.log(response);
        return;
      } catch (error: any) {
        console.log(error);
        return;
      }
    },
    [form?.email, form?.name, form?.password, userService]
  );

  const handleButtonState = useCallback((): boolean => {
    return (
      form?.emailIsValid === 'ok' &&
      form?.nameIsValid === 'ok' &&
      form?.passwordIsValid === 'ok'
    );
  }, [form?.emailIsValid, form?.nameIsValid, form?.passwordIsValid]);

  return (
    <form className={styles.formContainer} autoComplete="off">
      <h3>Cadastro</h3>
      <div className={styles.inputsContainer}>
        <Input
          label="Nome"
          required
          placeholder="Seu nome"
          onChange={handleInput}
          name="name"
          value={form?.name}
          errorMessage={form?.nameError}
          isValid={form?.nameIsValid}
        />
        <Input
          label="E-mail"
          required
          placeholder="Seu e-mail"
          onChange={handleInput}
          name="email"
          value={form?.email}
          type="email"
          errorMessage={form?.emailError}
          isValid={form?.emailIsValid}
        />
        <Input
          label="Senha"
          required
          placeholder="Sua senha"
          onChange={handleInput}
          name="password"
          value={form?.password}
          type="password"
          errorMessage={form?.passwordError}
          isValid={form?.passwordIsValid}
        />
      </div>
      <Button
        onClick={handleClick}
        text="Cadastrar"
        isDisabled={!handleButtonState()}
        customClass={styles.registerBtn}
      />
      <div className={styles.backLogin}>
        <span>Já tem conta?</span>
        <a>Clique para fazer Login</a>
      </div>
    </form>
  );
}
