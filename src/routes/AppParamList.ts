import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

// Navigation Params.
export type AppParamList = {
  Todos: undefined
  TodosRedux: undefined
}

export type AppNavigationProps<T extends keyof AppParamList> = {
  navigation: StackNavigationProp<AppParamList, T>
  route: RouteProp<AppParamList, T>
}
