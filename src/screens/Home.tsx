import * as React from 'react'
import { Button, Text } from 'react-native'
import ScrollLayout from '@rundown-components/ScrollLayout'
import { AuthContext } from '@rundown-routes/AuthProvider'

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const { logout } = React.useContext(AuthContext)

  return (
    <ScrollLayout testID="home screen">
      <Text>Home</Text>
      <Button title="Logout" onPress={() => logout()} />
    </ScrollLayout>
  )
}

export default Home
