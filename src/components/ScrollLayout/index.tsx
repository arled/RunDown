import React, { ReactNode } from 'react'
import { ScrollView, ViewStyle } from 'react-native'
import styles from './styles'

export interface ScrollLayoutProps {
  children: ReactNode
  testID?: string
  style?: ViewStyle
}

const ScrollLayout: React.FC<ScrollLayoutProps> = (props) => (
  <ScrollView contentContainerStyle={styles.scrollView}>
    {props.children}
  </ScrollView>
)

export default ScrollLayout
