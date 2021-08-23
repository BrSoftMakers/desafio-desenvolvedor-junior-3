import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from '../utils/isAuth';

interface Props {
  path: string;
  component: any;
}

export const PrivateRoute = (props: Props): JSX.Element => {
  const { component, path } = props;

  return (
    <div>
      {isAuthenticated() ? (
        <Route path={path} component={component} />
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};
