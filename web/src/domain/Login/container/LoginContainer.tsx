import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FooterLogin } from '../components/FooterLogin';
import { ContentLogin } from '../components/ContentLogin';
import { LoginHeader } from '../components/HeaderLogin';
import useForm from '../../../hooks/useForm';
import { Login, storeToken } from '../../../auth/service/login';
import http from '../../../config/http';

export const LoginContainer = (): JSX.Element => {
  const credentials = {
    username: '',
    password: '',
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const history = useHistory();
  const { values, handleChange, clearForm } = useForm(credentials);

  async function handleSubmit(event: React.FormEvent): Promise<void> {
    event.preventDefault();

    try {
      const token = await Login(values);
      storeToken(token);
      http.defaults.headers.authorization = `Bearer ${token}`;

      history.push('mural');
    } catch (err) {
      Swal.fire('OOPS', 'Usuário ou senha incorretos', 'error');
      clearForm();
    }
    Login(values);
  }

  return (
    <div className="h-screen bg-purple-200">
      <div className="container mx-auto">
        <LoginHeader />

        <main className="h-screen flex justify-center items-center">
          <ContentLogin
            values={values}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
          <FooterLogin />
        </main>
      </div>
    </div>
  );
};
