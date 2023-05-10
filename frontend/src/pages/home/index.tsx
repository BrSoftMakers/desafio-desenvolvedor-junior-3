import withAuthentication from '../../routes/auth';

function Home() {
  return <div>Usuário autenticado!</div>;
}

const AuthenticatedComponent = withAuthentication(Home);

export default AuthenticatedComponent;
