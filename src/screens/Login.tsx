import React from 'react'
import { Button, Text } from 'react-native'
import { AuthNavigationProps } from '@rundown-root/routes/AuthParamList'
import ScrollLayout from '@rundown-components/ScrollLayout'
import { AuthContext } from '@rundown-routes/AuthProvider'

const Login = ({ navigation, route }: AuthNavigationProps<'Login'>) => {
  const { login } = React.useContext(AuthContext)
  return (
    <ScrollLayout>
      <Text>route name: {route.name}</Text>
      <Button
        title="Login"
        onPress={() => {
          // TODO: Fill in some form and submit. (Formik)
          login()
        }}
      />
      <Button
        title="Register"
        onPress={() => {
          navigation.navigate('Register', { name: 'Sign up' })
        }}
      />
    </ScrollLayout>
  )
}

export default Login
