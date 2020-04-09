import * as React from 'react'
import { Button } from 'react-native'
import ScrollLayout from '@rundown-components/ScrollLayout'

const Start = ({ navigation }) => (
  <ScrollLayout testID="start screen">
    <Button
      title="Start"
      onPress={() => navigation.navigate('MainBottomTabs')}
    />
  </ScrollLayout>
)

export default Start
