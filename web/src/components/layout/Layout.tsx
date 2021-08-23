import { useHistory } from 'react-router-dom';
import logo from '../../_assets/img/levitation.png';

interface Props {
  children: React.ReactNode;
}

export const Layout = (props: Props): JSX.Element => {
  const { children } = props;
  const history = useHistory();

  return (
    <div className="h-screen">
      <header className="bg-purple-200 p-4 border-b-2 border-purple-300 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex items-center ml-5">
            <img className="w-11" src={logo} alt="logo" />
            <span className="ml-3 font-title text-2xl font-semibold">
              SoftBlog
            </span>
          </div>

          <div>
            <button
              className="font-title text-white bg-red-600 rounded px-5 py-2 mr-5"
              type="button"
              onClick={() => {
                window.localStorage.clear();
                history.push('/');
              }}
            >
              Sair
            </button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto">{children}</main>
    </div>
  );
};
