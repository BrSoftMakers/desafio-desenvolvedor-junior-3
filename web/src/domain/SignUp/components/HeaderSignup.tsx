import { Link } from 'react-router-dom';
import logo from '../../../_assets/img/levitation.png';

export const HeaderSignup = (): JSX.Element => {
  return (
    <Link to="/">
      <div className="flex items-center p-4 absolute">
        <img className="w-11" src={logo} alt="logo" />
        <span className="ml-3 font-title text-2xl font-semibold">SoftBlog</span>
      </div>
    </Link>
  );
};
