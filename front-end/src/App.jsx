import React from 'react'
import MainLayout from './Layout/main-layout/index.jsx'
import LoginPage from './components/Login.jsx'
import RegisterPage from './components/Register.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default function App () {
  return (
    <ChakraProvider>
      <Router>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
          </Switch>
        </MainLayout>
      </Router>
    </ChakraProvider>
  )
}
