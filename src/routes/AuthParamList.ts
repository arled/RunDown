import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

// Navigation Params.
export type AuthParamList = {
  Login: { name: string }
  Register: { name: string }
}

export type AuthNavigationProps<T extends keyof AuthParamList> = {
  navigation: StackNavigationProp<AuthParamList, T>
  route: RouteProp<AuthParamList, T>
}
