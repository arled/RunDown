import React, { ReactNode } from 'react'
import { ScrollView, ViewStyle, SafeAreaView } from 'react-native'
import styles from './styles'

export interface ScrollLayoutProps {
  children: ReactNode
  testID?: string
  style?: ViewStyle
  showSafeAreaTop?: boolean
}

const ScrollLayout: React.FC<ScrollLayoutProps> = ({
  children,
  showSafeAreaTop = true,
}) => {
  return (
    <>
      {showSafeAreaTop && <SafeAreaView style={styles.safeArea} />}
      <ScrollView contentContainerStyle={styles.scrollView}>
        {children}
      </ScrollView>
    </>
  )
}

export default ScrollLayout
