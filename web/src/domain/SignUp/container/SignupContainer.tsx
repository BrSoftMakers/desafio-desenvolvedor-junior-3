import Swal from 'sweetalert2';
import useForm from '../../../hooks/useForm';
import { ContentSignup } from '../components/ContentSignup';
import { FooterSignup } from '../components/FooterSignUp';
import { HeaderSignup } from '../components/HeaderSignup';
import CreateUser from '../services/createUser';

export const SignupContainer = (): JSX.Element => {
  const createUser = {
    fullName: '',
    age: '',
    username: '',
    password: '',
    repeatPassword: '',
  };
  const { values, handleChange, clearForm } = useForm(createUser);

  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();

    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { repeatPassword, ...rest } = values;
      CreateUser(rest);
      Swal.fire('Usuário criado', '', 'success');

      clearForm();
    } catch (err) {
      Swal.fire('Oops', err.message, 'error');
    }
  }

  return (
    <div className="h-screen bg-purple-200">
      <HeaderSignup />

      <main className="h-full flex justify-center items-center">
        <ContentSignup
          values={values}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </main>

      <FooterSignup />
    </div>
  );
};
