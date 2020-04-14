import React from 'react'
import { User } from '@rundown-types/Types'
import { setItem, removeItem } from '@rundown-utils/asyncStorage'

export const AuthContext = React.createContext<{
  // Params.
  user: User
  login: () => void
  logout: () => void
}>({
  // Default params values.
  user: null,
  login: () => {},
  logout: () => {},
})

interface AuthProviderProps {}

const fakeUSer = { username: 'fakeUser' }

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = React.useState<User>(null)
  return (
    <AuthContext.Provider
      // Real params values.
      value={{
        user,
        login: async () => {
          setUser(fakeUSer)
          try {
            await setItem('user', JSON.stringify(fakeUSer))
          } catch (e) {
            throw new Error(e)
          }
        },
        logout: async () => {
          setUser(null)
          try {
            await removeItem('user')
          } catch (e) {
            throw new Error(e)
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
