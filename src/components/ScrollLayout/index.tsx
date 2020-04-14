import React, { ReactNode } from 'react'
import { ScrollView, ViewStyle } from 'react-native'
import styles from './styles'
import Center from '../Center'

export interface ScrollLayoutProps {
  children: ReactNode
  testID?: string
  style?: ViewStyle
}

const ScrollLayout: React.FC<ScrollLayoutProps> = ({ children }) => (
  <ScrollView contentContainerStyle={styles.scrollView}>
    <Center>{children}</Center>
  </ScrollView>
)

export default ScrollLayout
