import { useCallback, useContext, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from './styles.module.scss';
import AppContext from '../../context/AppContext';
import isValidFields from '../../utils/handleInput';
import UserService from '../../service/UserService';
import TostifyService from '../../service/TostifyService';
import AuthService from '../../service/AuthService';

type FormLoginType = {
  email: string;
  emailError: string;
  emailIsValid: string;
  password: string;
  passwordError: string;
  passwordIsValid: string;
};

export interface requiredFields {
  [key: string]: boolean;
}

export default function Login() {
  const { isLoading, setIsLoading, setUserInfo } = useContext(AppContext);

  const navigate = useNavigate();

  const userService = useMemo(() => new UserService(), []);
  const authService = useMemo(() => new AuthService(), []);
  const notify = useMemo(() => new TostifyService(), []);

  const [form, setForm] = useState<FormLoginType>({
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

    const { error, isValid } = isValidFields(value, name, requiredFields[name]);

    setForm((oldState: FormLoginType): FormLoginType => {
      return {
        ...oldState,
        [name]: value,
        [`${name}Error`]: error,
        [`${name}IsValid`]: isValid,
      };
    });
  };

  const handleLogin = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
      event.preventDefault();

      const data = {
        password: form?.password,
        email: form?.email,
      };

      try {
        setIsLoading?.(true);
        const loginResponse = await userService.login(data);
        authService.setUserLocalStorage(loginResponse);
        setUserInfo?.(loginResponse.user);
        notify.sucess('Você está logado!');
        navigate('/home');
        return;
      } catch (error: any) {
        const { response } = error;

        if (response?.status === 401 || response?.status === 404) {
          notify.error('E-email ou senha inválidos');
          setForm((oldState: FormLoginType) => {
            return {
              ...oldState,
              email: '',
              password: '',
              emailIsValid: 'notOk',
              passwordIsValid: 'notOk',
            };
          });
        }

        return;
      } finally {
        setIsLoading?.(false);
      }
    },
    [
      authService,
      form?.email,
      form?.password,
      navigate,
      notify,
      setIsLoading,
      setUserInfo,
      userService,
    ]
  );

  const handleButtonState = useCallback((): boolean => {
    return form?.emailIsValid === 'ok' && form?.passwordIsValid === 'ok';
  }, [form?.emailIsValid, form?.passwordIsValid]);

  return (
    <form className={styles.formContainer} autoComplete="off">
      <h3>Login</h3>
      <div className={styles.inputsContainer}>
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
          onClick={handleLogin}
          text="Logar"
          isDisabled={!handleButtonState()}
          customClass={styles.loginBtn}
        />
      )}

      {isLoading && <span>Carregando</span>}

      <div className={styles.backLogin}>
        <span>Não tem conta?</span>
        <Link to="/cadastro">Clique para realizar o cadastro</Link>
      </div>
    </form>
  );
}
