import React from 'react'
import { AuthParamList } from './AuthParamList'
import Login from '@rundown-screens/Login'
import Register from '@rundown-screens/Register'
import { createStackNavigator } from '@react-navigation/stack'

interface AppTabsProps {}

const Stack = createStackNavigator<AuthParamList>()

export const AuthStack: React.FC<AppTabsProps> = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  )
}
