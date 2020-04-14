import React, { useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Center from '@rundown-components/Center'
import { AuthContext } from '@rundown-routes/AuthProvider'
import { AppTabs } from './AppTabs'
import { AuthStack } from './AuthStack'
import { getItem } from '@rundown-utils/asyncStorage'

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = () => {
  const { user, login } = React.useContext(AuthContext)
  const [loading, setLoading] = React.useState(true)

  const loginRef = React.useRef(login)

  useEffect(() => {
    const getUser = async () => {
      getItem('user')
        .then((userExists) => {
          if (userExists) {
            // Decode it.
            loginRef.current()
          }
          setLoading(false)
        })
        // TODO: Real error handling.
        .catch((e) => {
          throw new Error(e)
        })
    }
    getUser()
  }, [])

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    )
  }

  return (
    <NavigationContainer>
      {user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  )
}
