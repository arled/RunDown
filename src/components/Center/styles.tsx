import { StyleSheet, ViewStyle } from 'react-native'

interface ScrollLayoutStyles {
  scrollView: ViewStyle
}

const styles: ScrollLayoutStyles = StyleSheet.create({
  scrollView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default styles
