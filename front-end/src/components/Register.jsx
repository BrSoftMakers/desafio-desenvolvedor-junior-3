import {
  Box,
  Button,
  Flex,
  Heading,
  Text
} from '@chakra-ui/react'
import React, { useState, useContext } from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import { IoPersonOutline } from 'react-icons/io5'
import { register } from '../services/register'
import isEmailValid from '../validations/isEmailValid'
import CustomInput from './CustomInput'
import { useHistory } from 'react-router-dom'
import context from '../context/context'

export default function RegisterPage () {
  const history = useHistory()
  const { setIsLogged } = useContext(context)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [onSubmitError, setOnSubmitError] = useState(false)

  const [errors, setErrors] = useState({
    email: false,
    password: false,
    name: false
  })
  const [forms, setForms] = useState({
    email: '',
    password: '',
    name: ''
  })
  const clearForm = () => {
    setForms({
      email: '',
      password: '',
      name: ''
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForms({
      ...forms,
      [name]: value
    })
  }
  const handleSubmit = () => {
    const { email, password, name } = forms
    const emailError = !isEmailValid(email)
    const passwordError = password.length < 4
    const nameError = name.length < 4

    setErrors({
      email: emailError,
      password: passwordError,
      name: nameError
    })
    if (!emailError && !passwordError && !nameError) {
      setIsSubmitting(true)
      register({ email, password, name })
        .then((res) => {
          const { token } = res
          localStorage.setItem('token', token)
          setIsSubmitting(false)
          clearForm()
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
          <Text>Para criar uma conta, você precisa sair da sua conta atual</Text>
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
      <Heading>Crie sua conta</Heading>
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
        <CustomInput
          isInvalid={errors.name}
          onChange={handleChange}
          value={forms.name}
          isDisabled={isSubmitting}
          label="Nome"
          name="name"
          type="text"
          leftIcon={<IoPersonOutline />}
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
          Registrar
        </Button>
        {onSubmitError && (
          <Text color="red.500" marginTop="4">
            Por favor, verifique os dados e tente novamente
          </Text>
        )}
      </Box>
    </Flex>
        )
  )
}
