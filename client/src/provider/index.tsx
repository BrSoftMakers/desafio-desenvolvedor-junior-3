import { ReactNode } from 'react'

import {AuthProvider} from "./auth"
import {PostProvider} from "./post"

interface ProviderProps {
  children: ReactNode
}

const Providers = ({ children }: ProviderProps) => {
  return <AuthProvider>
    <PostProvider>
    {children}
    </PostProvider>
    </AuthProvider>
}

export default Providers