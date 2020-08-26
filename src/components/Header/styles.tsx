import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: 235,
    backgroundColor: '#16a085',
    borderBottomColor: '#1abc9c',
    borderBottomWidth: 5, //StyleSheet.hairlineWidth,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
})

export default styles
