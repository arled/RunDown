import React from 'react'
import { Button, Text, View, ViewStyle } from 'react-native'
import styles from './styles'

export interface CenterProps {
  title: string
  testID?: string
  style?: ViewStyle
  action?: () => void
}

const Header: React.FC<CenterProps> = ({ title, action }) => (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      {/* TODO: Create title component. */}
      <Text style={styles.title}>{title}</Text>
    </View>
    {action && <Button title="Logout" onPress={() => action()} />}
  </View>
)

export default Header
