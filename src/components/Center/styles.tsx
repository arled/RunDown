import { StyleSheet, ViewStyle } from 'react-native'

interface ScrollLayoutStyles {
  container: ViewStyle
}

const styles: ScrollLayoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default styles
