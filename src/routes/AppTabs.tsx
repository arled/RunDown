import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AppParamList } from './AppParamList'
import Home from '@rundown-screens/Home'
import History from '@rundown-screens/History'

interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppParamList>()

export const AppTabs: React.FC<AppTabsProps> = () => {
  return (
    <Tabs.Navigator
      // TODO: Tab Icons.
      // screenOptions={({ route }) => ({
      //   tabBarIcon: ({ focused, color, size }) => {},
      // })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="History" component={History} />
    </Tabs.Navigator>
  )
}
