import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './rotas/Home';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from './rotas/Feed';
import Cadastro from './rotas/Cadastro';
import FeedMeusPosts from './rotas/FeedMeusPosts';
import CriaPost from './rotas/criarPost';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  li {
    list-style: none;    
  }


`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path='/home-login' element={<Home />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/feed' element={<Feed/>}/>
        <Route path='/feed/meus-posts' element={<FeedMeusPosts/>}/>
        <Route path='/feed/criar-post' element={<CriaPost/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();