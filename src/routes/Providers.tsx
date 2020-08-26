import React from 'react'
import { Provider } from 'react-redux'
import { AuthProvider } from './AuthProvider'
import { Routes } from './Routes'
import { store } from '../store'

interface AuthProviderProps {}

export const Providers: React.FC<AuthProviderProps> = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Provider>
  )
}
