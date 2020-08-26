import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AppParamList } from './AppParamList'
import Todos from '@rundown-root/screens/Todos'
import TodosRedux from '@rundown-root/screens/TodosRedux'

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
      <Tabs.Screen name="Todos" component={Todos} />
      <Tabs.Screen name="TodosRedux" component={TodosRedux} />
    </Tabs.Navigator>
  )
}
