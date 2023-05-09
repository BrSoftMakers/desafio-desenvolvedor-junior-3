import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//páginas
import Home from './routes/Home.jsx'
import NewPost from './routes/NewEditPost.jsx'
import Post from './routes/Post.jsx'
import Login from './routes/Login.jsx'
import Register from './routes/Register.jsx'


const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/blog',
        element: <Home/>
      },
      {
        path: '/newpost',
        element: <NewPost/>
      },
      {
        path: '/editpost/:id',
        element: <NewPost/>
      },
      {
        path: '/posts/:id',
        element: <Post/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
