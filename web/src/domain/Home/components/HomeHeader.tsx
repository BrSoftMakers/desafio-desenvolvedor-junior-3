import logo from '../../../_assets/img/levitation.png';

interface Props {
  handleLogin(): void;
  handleSignUp(): void;
}

export const HomeHeader = (props: Props): JSX.Element => {
  const { handleLogin, handleSignUp } = props;

  return (
    <header>
      <nav className="flex items-center justify-between w-full absolute p-4 md:p-8">
        <div className="flex items-center">
          <img className="w-11" src={logo} alt="logo" />
          <span className="ml-3 font-title text-2xl font-semibold">
            SoftBlog
          </span>
        </div>
        <div>
          <button
            className="mr-4 md:mr-8 font-title font-semibold"
            type="button"
            onClick={handleLogin}
          >
            LOG IN
          </button>
          <button
            className="font-title bg-purple-600 text-white p-2 lg:p-4"
            type="button"
            onClick={handleSignUp}
          >
            Sign up
          </button>
        </div>
      </nav>
    </header>
  );
};
