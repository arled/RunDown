import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Start from '@rundown-screens/Start'
import Home from '@rundown-screens/Home'
import History from '@rundown-screens/History'

const Stack = createStackNavigator()
const MaterialBottomTabs = createBottomTabNavigator()

const BottomTabs = () => (
  <MaterialBottomTabs.Navigator>
    <MaterialBottomTabs.Screen name="Home" component={Home} />
    <MaterialBottomTabs.Screen name="History" component={History} />
  </MaterialBottomTabs.Navigator>
)

const MainStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Start" component={Start} />
    <Stack.Screen name="MainBottomTabs" component={BottomTabs} />
  </Stack.Navigator>
)

const App = () => <NavigationContainer>{MainStack()}</NavigationContainer>

export default App
