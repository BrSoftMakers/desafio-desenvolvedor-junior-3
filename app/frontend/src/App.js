import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
// import Posts from './pages/Posts';
// import PostsDetails from './pages/PostsDetails';
// import UserPosts from './pages/UserPosts';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        < Redirect to='/login' />
      </Route>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      {/* <Route path="/posts" Component={ Posts } />
      <Route exact path="/user/posts" Component={ UserPosts } />
      <Route path="/user/posts/:id" Component={ PostsDetails } /> */}
    </Switch>
  );
}

export default App;