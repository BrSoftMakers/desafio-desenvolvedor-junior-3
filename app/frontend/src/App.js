import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Posts from './Pages/Posts';
import PostsDetails from './Pages/PostsDetails';
import CreatePost from './Pages/CreatePost';
import EditPost from './Pages/EditPost';
// import MyPosts from './Pages/MyPosts';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        < Redirect to='/login' />
      </Route>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route exact path="/posts" component={ Posts } />
      <Route path="/posts/:id" component={ PostsDetails } />
      <Route path="/createpost" component={ CreatePost } />
      <Route path="/editpost/:id" component={ EditPost } /> 
      {/* Route path="/MyPosts" component={ MyPosts } /> */}
    </Switch>
  );
}

export default App;