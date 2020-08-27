import * as React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import ScrollLayout from '@rundown-components/ScrollLayout'
import { AuthContext } from '@rundown-routes/AuthProvider'
import Header from '@rundown-components/Header'
import { InputField } from '@rundown-components/InputField'
import { Button } from '@rundown-components/Button'

interface HomeProps {}

type TodoItem = {
  key: number
  text: string
}[]

const Home: React.FC<HomeProps> = () => {
  const { logout } = React.useContext(AuthContext)
  const [value, setValue] = React.useState<string>()
  const [todos, setTodos] = React.useState<TodoItem>([])

  return (
    <ScrollLayout testID="home screen" showSafeAreaTop={false}>
      <Header title="Simple Todos" action={() => logout()} />
      <InputField value={value} onChange={(value) => setValue(value)} />
      <Button
        title="Add"
        onPress={() => {
          value &&
            setTodos((items: TodoItem) => [
              { key: Math.random(), text: value },
              ...items,
            ])
          setValue('')
        }}
      />
      {todos &&
        todos.map((item) => (
          /* TODO: Create TodoItem component. */
          <TouchableOpacity
            key={item.key}
            onPress={() => {
              setTodos((items: TodoItem) =>
                items.filter((i) => i.key !== item.key)
              )
            }}
          >
            <Text
              style={{
                fontSize: 20,
                marginHorizontal: 20,
                marginVertical: 5,
                padding: 16,
                borderWidth: 1,
                borderColor: '#bbb',
                borderRadius: 10,
              }}
            >
              {item.text}
            </Text>
          </TouchableOpacity>
        ))}
    </ScrollLayout>
  )
}

export default Home
