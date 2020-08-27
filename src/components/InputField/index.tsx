import React from 'react'
import { TextInput } from 'react-native'
import styles from './styles'

export interface InputFieldProps {
  value: string
  onChange: (text: string) => void
  placeHolder?: string
}

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  placeHolder,
}) => (
  <TextInput
    style={styles.inputField}
    placeholder={placeHolder}
    value={value}
    onChangeText={(value) => onChange(value)}
  />
)
