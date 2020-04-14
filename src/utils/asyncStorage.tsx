import AsyncStorage from '@react-native-community/async-storage'

export const setItem = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    throw new Error(e)
  }
}

export const getItem = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key)
    return data
  } catch (e) {
    throw new Error(e)
  }
}

export const removeItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
    throw new Error(e)
  }
}
