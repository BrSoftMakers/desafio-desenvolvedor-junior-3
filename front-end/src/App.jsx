import React from 'react'
import MainLayout from './Layout/main-layout/index.jsx'
import LoginPage from './components/Login.jsx'
import RegisterPage from './components/Register.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ContextProvide from './context/contextProvider.jsx'
import PostsPage from './components/Posts.jsx'
import PostDetails from './components/postDetails.jsx'
import MyPostsPage from './components/myPostsPage.jsx'
import editPostPage from './components/edit-post.jsx'

export default function App () {
  return (
    <ChakraProvider>
      <ContextProvide>
        <Router>
          <MainLayout>
            <Switch>
              <Route exact path="/" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/posts" component={PostsPage} />
              <Route path="/post/:id" component={PostDetails} />
              <Route path="/meus-posts" component={MyPostsPage} />
              <Route path="/editar-post/:id" component={editPostPage} />
              <Route path="*" component={() => <h1>404</h1>} />
            </Switch>
          </MainLayout>
        </Router>
      </ContextProvide>
    </ChakraProvider>
  )
}
