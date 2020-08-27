import React from 'react'
import { Button, Text } from 'react-native'
import { AuthNavigationProps } from '@rundown-root/routes/AuthParamList'
import ScrollLayout from '@rundown-components/ScrollLayout'
import Center from '@rundown-components/Center'

const Register = ({ navigation, route }: AuthNavigationProps<'Register'>) => {
  return (
    <ScrollLayout>
      <Center>
        <Text>route name: {route.name}</Text>
        <Text>route params: {route.params.name}</Text>
      </Center>
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
