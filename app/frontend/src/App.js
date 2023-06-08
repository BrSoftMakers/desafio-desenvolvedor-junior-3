import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Posts from './Pages/Posts';
import PostsDetails from './Pages/PostsDetails';
// import MyPosts from './Pages/MyPosts';
import CreatePost from './Pages/CreatePost';
// import EditPost from './Pages/EditPost';

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
      {/*
      <Route path="/MyPosts" component={ MyPosts } />
      <Route path="/editpost/:id" component={ EditPost } /> */}
    </Switch>
  );
}

export default App;