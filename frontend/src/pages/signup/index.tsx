import { FormEvent, useState, useContext } from 'react'
import Head from "next/head"
import Image from "next/image"
import styles from '../../../styles/home.module.scss'

import logoImg from '../../../public/logo.png'

import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"

import { AuthContext } from '../../contexts/AuthContext'

import Link from "next/link"
import { toast } from 'react-toastify'

export default function Signup() {
  const {signUp} = useContext(AuthContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false);

  async function handleSignUp(event: FormEvent) {
    event.preventDefault();

    if (email === '' || password === '' || email === '') {
      toast.error("Preencha todos os campos!")
      return;
    }
    //inicia o spinner
    setLoading(true);

    let data = {
      name,
      email,
      password
    }

    await signUp(data)
    //para o spinner
    setLoading(false);
  }
  return (
    <>
      <Head>
        <title>OBLog - Faça seu cadastro</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo O Blog" width={400} />
        <div className={styles.login}>
          <h1>Criando sua conta</h1>
          
          <form onSubmit={handleSignUp}>
            <Input
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e)=> setName(e.target.value)}
            />

            <Input
              type="text"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />

            <Input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
            
            <Button
              type="submit"
              loading={loading}
            >
              Cadastrar
            </Button>
          </form>

          <Link href="/" legacyBehavior>
            <a className={styles.text}>Já possui uma conta? Faça login!</a>
          </Link>

        </div>
      </div>
    </>
  )
}