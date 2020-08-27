import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'

export interface ButtonProps {
  title: string
  testID?: string
  onPress: () => void
  showBackground?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  testID,
  showBackground = true,
}) => (
  <TouchableOpacity
    style={[
      styles.container,
      showBackground && { backgroundColor: 'lightgrey' },
    ]}
    testID={`${testID} button`}
    onPress={onPress}
  >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
)
