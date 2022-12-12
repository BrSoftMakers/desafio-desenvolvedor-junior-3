import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Text
} from '@chakra-ui/react'
import React, { useState, useContext } from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import { login } from '../services/login'
import isEmailValid from '../validations/isEmailValid'
import CustomInput from './CustomInput'
import { useHistory } from 'react-router-dom'
import context from '../context/context'

export default function Login () {
  const history = useHistory()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [onSubmitError, setOnSubmitError] = useState(false)
  const { setIsLogged } = useContext(context)

  const [errors, setErrors] = useState({
    email: false,
    password: false
  })
  const [forms, setForms] = useState({
    email: '',
    password: ''
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setForms({
      ...forms,
      [name]: value
    })
  }
  const handleSubmit = () => {
    const { email, password } = forms
    const emailError = !isEmailValid(email)
    const passwordError = password.length < 4
    setErrors({
      email: emailError,
      password: passwordError
    })
    if (!emailError && !passwordError) {
      setIsSubmitting(true)
      login({ email, password })
        .then((res) => {
          const { token } = res.data
          console.log('login', token)
          localStorage.setItem('token', token)
          setIsSubmitting(false)
          localStorage.setItem('isLogged', true)
          setIsLogged(true)
        })
        .catch((err) => {
          console.log(err)
          setIsSubmitting(false)
          setOnSubmitError(true)
        })
    }
  }

  const redirectAfterLogout = () => {
    history.go(0)
  }

  return (
    (localStorage.getItem('isLogged') === 'true')
      ? (
      <>
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          marginTop={12}
        >
          <Heading>Você já está logado</Heading>
          <Text>Para logar em outra conta, você precisa sair da sua conta atual</Text>
          <Button
            onClick={() => { localStorage.removeItem('token'); localStorage.removeItem('isLogged'); setIsLogged(false); redirectAfterLogout() }}
            colorScheme="blue"
            marginTop={4}
          >
            Sair
          </Button>
        </Flex>
      </>
        )
      : (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      marginTop={12}
    >
      <Heading>Login</Heading>
      <Text>Entre na sua conta</Text>
      <Box maxWidth="400px" width="100%" marginTop="4">
        <CustomInput
          isInvalid={errors.email}
          onChange={handleChange}
          value={forms.email}
          isDisabled={isSubmitting}
          label="Email"
          name="email"
          type="email"
          leftIcon={<FaEnvelope />}
        />
        <CustomInput
          isInvalid={errors.password}
          onChange={handleChange}
          value={forms.password}
          isDisabled={isSubmitting}
          label="Senha"
          name="password"
          type="password"
          leftIcon={<FaLock />}
        />
        <Button
          onClick={handleSubmit}
          onLoad={() => setIsSubmitting(false)}
          isLoading={isSubmitting}
          loadingText="Entrando..."
          colorScheme="blue"
          variant="outline"
          size="lg"
          width="100%"
          marginTop="4"
        >
          Entrar
        </Button>
        {onSubmitError && (
          <Text color="red.500" marginTop="4">
            Email ou senha incorretos
          </Text>
        )}
      </Box>
      <Text marginTop="4">
        {/* <Link href="/forgot-password">Esqueceu sua senha ?</Link> */}
      </Text>
      <Text marginTop="4">
        <Link href="/register">Criar conta</Link>
      </Text>
    </Flex>
        )
  )
}
