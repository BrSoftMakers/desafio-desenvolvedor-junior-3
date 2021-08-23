import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthContextProvider } from '../auth/context/authContext';
import { PrivateRoute } from '../components/PrivateRoute';
import { PostContainer } from '../domain/Post/PostContainer';

import CreatePost from '../screens/CreatePost';
import EditPost from '../screens/EditPost';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Mural from '../screens/Mural';
import SignUp from '../screens/Signup';

const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />

        <AuthContextProvider>
          <PrivateRoute path="/mural" component={Mural} />
          <PrivateRoute path="/create-post" component={CreatePost} />
          <PrivateRoute path="/edit-post" component={EditPost} />
          <PrivateRoute path="/post" component={PostContainer} />
        </AuthContextProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
