import React, { ReactNode } from 'react'
import { View, ViewStyle } from 'react-native'
import styles from './styles'

export interface CenterProps {
  children: ReactNode
  testID?: string
  style?: ViewStyle
}

const Center: React.FC<CenterProps> = ({ children }) => (
  <View style={styles.scrollView}>{children}</View>
)

export default Center
