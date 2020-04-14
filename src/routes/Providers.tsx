import React from 'react'
import { AuthProvider } from './AuthProvider'
import { Routes } from './Routes'

interface AuthProviderProps {}

export const Providers: React.FC<AuthProviderProps> = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}
