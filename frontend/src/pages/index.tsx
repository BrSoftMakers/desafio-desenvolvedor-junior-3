import { FormEvent, useContext, useState } from "react"

import Head from "next/head"
import Image from "next/image"
import styles from '../../styles/home.module.scss'

import logoImg from '../../public/logo.png'
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { toast } from "react-toastify"

import { AuthContext } from "../contexts/AuthContext"

import Link from "next/link"

import { canSSRGuest } from "../utils/canSSRGuest"

import { GetServerSideProps } from "next"
export default function Home() {
  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoaging] = useState(false);


  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    if (email === '' || password === '') {
      toast.warning("Preencha os campos!")
      return;
    }

    setLoaging(true);

    let data = {
      email,
      password
    }

    await signIn(data)

    setLoaging(false)
  }
  return (
    <>
      <Head>
        <title>OBlog - Faça Login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo" width={400}/>
        <div className={styles.login}>

          <form onSubmit={handleLogin}>
            <Input
              type="text"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              loading={loading}
            >
              Acessar
            </Button>
          </form>

          <Link href="/signup" legacyBehavior>
            <a className={styles.text}>Não possui uma conta? Cadastre-se</a>
          </Link>

        </div>
      </div>
    </>
  )
}

export const getServerSideProps =  canSSRGuest(async(ctx)=>{
  return {
    props: {}
  }
})