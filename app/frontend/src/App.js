import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Posts from './Pages/Posts';
// import PostsDetails from './pages/PostsDetails';
// import MyPosts from './pages/MyPosts';
// import CreatePost from './pages/CreatePost';
// import EditPost from './pages/EditPost';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        < Redirect to='/login' />
      </Route>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/posts" component={ Posts } />
      {/*
      <Route path="/posts/:id" component={ PostsDetails } />
      <Route path="/MyPosts" component={ MyPosts } />
      <Route path="/createpost" component={ CreatePost } />
      <Route path="/editpost/:id" component={ EditPost } /> */}
    </Switch>
  );
}

export default App;