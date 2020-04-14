import React from 'react'
import { Button, Text } from 'react-native'
import { AuthNavigationProps } from '@rundown-root/routes/AuthParamList'
import ScrollLayout from '@rundown-components/ScrollLayout'

const Register = ({ navigation, route }: AuthNavigationProps<'Register'>) => {
  return (
    <ScrollLayout>
      <Text>route name: {route.name}</Text>
      <Text>route params: {route.params.name}</Text>
      <Button
        title="Back"
        onPress={() => {
          navigation.navigate('Login')
        }}
      />
    </ScrollLayout>
  )
}

export default Register
