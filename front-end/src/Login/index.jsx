import React from 'react'
import CustomInput from '../components/CustomInput'
import { Button, Box, Heading, Text, Link, Flex } from '@chakra-ui/react'
import { FaEnvelope, FaLock } from 'react-icons/fa'

export default function Login () {
  return (
    <Flex direction="column" alignItems="center" justifyContent="center">
      <Heading>Login</Heading>
      <Text>Entre na sua conta</Text>
      <Box maxWidth="400px" width="100%" marginTop="4">
        <CustomInput label="Email" name="email" type="email" leftIcon={<FaEnvelope />} />
        <CustomInput label="Senha" name="password" type="password" leftIcon={<FaLock/>} />
        <Button colorScheme="blue" variant="outline" size="lg" width="100%" marginTop="4">
            Entrar
        </Button>
      </Box>
      <Text marginTop="4">
        <Link href="/forgot-password">Esqueceu sua senha ?</Link>
      </Text>
      <Text marginTop="4">
        <Link href="/register">Criar conta</Link>
      </Text>
    </Flex>
  )
}
