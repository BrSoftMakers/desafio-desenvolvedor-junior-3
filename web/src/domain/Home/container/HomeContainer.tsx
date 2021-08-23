import { useHistory } from 'react-router-dom';
import { HomeHeader } from '../components/HomeHeader';
import { HomeHero } from '../components/HomeHero';

export const HomeContainer = (): JSX.Element => {
  const history = useHistory();

  function btnLogin(): void {
    history.push('login');
  }
  function btnSignUp(): void {
    history.push('signup');
  }

  return (
    <div className="w-screen h-screen bg-purple-200">
      <HomeHeader handleLogin={btnLogin} handleSignUp={btnSignUp} />
      <HomeHero />
    </div>
  );
};
