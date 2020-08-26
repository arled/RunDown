import React from 'react'
import { TextInput } from 'react-native'
import styles from './styles'

export interface InputFieldProps {
  value: string
  onChange: (text: string) => void
  placeHolder?: string
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  placeHolder,
}) => {
  const handleChange = (value: string) => {
    onChange(value)
  }

  return (
    <TextInput
      style={styles.inputField}
      placeholder={placeHolder}
      value={value}
      onChangeText={(value) => handleChange(value)}
    />
  )
}

export default InputField
