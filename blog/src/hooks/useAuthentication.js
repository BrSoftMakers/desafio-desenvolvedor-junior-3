import { db } from "../firebase/config";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sigOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)

  const [canceled, setCanceled] = useState(false)

  const auth = getAuth()

  function checkIfIsCancelled() {
    if (canceled) {
      return
    }
  }

  const createUser = async (data) =>
   {
    checkIfIsCancelled()

    setLoading(true)
    setError(null)

    try {
      const {user} = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
      await updateProfile(user, {
        displayName: data.displayName
      })

      setLoading(false)

      return user

    } catch (error) {
      console.log(error.message)
      console.log(typeof error.message)

      let systemErrorMessage

      if(error.message.includes("Password")) {
        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres."
      } else if (error.message.includes("email-already")) {
        systemErrorMessage = "Email ja cadastrado."
      } else {
        systemErrorMessage = "Ocorreu um erro!!"
      }
      
      setLoading(false)
      setError(systemErrorMessage)
    }

    
  };

  useEffect(() => {
    return () => setCanceled(true)
  },[])


  return {
    auth,
    createUser,
    error,
    loading
  }
}