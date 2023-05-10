import { useCallback, useContext, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import UserService from '../../service/UserService';
import isValidFields from '../../utils/handleInput';

import Button from '../../components/Button';
import Input from '../../components/Input';

import styles from './styles.module.scss';
import AppContext from '../../context/AppContext';
import TostifyService from '../../service/TostifyService';

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
  const { isLoading, setIsLoading } = useContext(AppContext);

  const navigate = useNavigate();

  const userService = useMemo(() => new UserService(), []);
  const notify = useMemo(() => new TostifyService(), []);

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

  const handleRegister = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
      event.preventDefault();

      const data = {
        name: form?.name,
        password: form?.password,
        email: form?.email,
      };

      try {
        setIsLoading?.(true);
        await userService.register(data);
        notify.sucess('Cadastro realizado com sucesso!');
        navigate('/login');
        return;
      } catch (error: any) {
        const { response } = error;

        if (response?.status === 409) {
          setForm((oldState) => {
            return {
              ...oldState,
              emailError: 'E-mail já está em uso',
              emailIsValid: 'notOk',
            };
          });
        }

        return;
      } finally {
        setIsLoading?.(false);
      }
    },
    [
      form?.email,
      form?.name,
      form?.password,
      navigate,
      notify,
      setIsLoading,
      userService,
    ]
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
      {!isLoading && (
        <Button
          onClick={handleRegister}
          text="Login"
          isDisabled={!handleButtonState()}
          customClass={styles.registerBtn}
        />
      )}

      {isLoading && <span>Carregando</span>}

      <div className={styles.backLogin}>
        <span>Já tem conta?</span>
        <Link to="/login">Clique para realizar login</Link>
      </div>
    </form>
  );
}
