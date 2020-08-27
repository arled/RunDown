import * as React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { AuthContext } from '@rundown-routes/AuthProvider'
import ScrollLayout from '@rundown-components/ScrollLayout'
import Header from '@rundown-components/Header'
import { addTodo, doneTodo } from '../actions/todos/todosActions'
import { AppState, Todos } from '@rundown-types/Types'
import { InputField } from '@rundown-components/InputField'
import { Button } from '@rundown-components/Button'

interface TodosReduxProps {
  onAddTodo: (text: string) => void
  onDoneTodo: (id: number) => void
  todos: Todos
}

const TodosRedux: React.FC<TodosReduxProps> = ({
  onAddTodo,
  onDoneTodo,
  todos,
}) => {
  const [value, setValue] = React.useState<string>()

  const onPressAddTodo = () => {
    value && onAddTodo(value)
    setValue('')
  }

  const onPressDoneTodo = (id: number) => {
    onDoneTodo(id)
  }

  const { logout } = React.useContext(AuthContext)

  return (
    <ScrollLayout testID="TodosRedux screen" showSafeAreaTop={false}>
      <Header title="Redux Todos" action={() => logout()} />
      <InputField value={value} onChange={(value) => setValue(value)} />
      <Button title="Add" onPress={() => onPressAddTodo()} />
      {todos &&
        todos.map((item) => (
          /* TODO: Create TodoItem component. */
          <TouchableOpacity
            key={item.id}
            onPress={() => onPressDoneTodo(item.id)}
          >
            <Text
              style={{
                fontSize: 20,
                marginHorizontal: 20,
                marginVertical: 5,
                padding: 16,
                borderWidth: 3,
                borderColor: item.completed ? '#1abc9c' : '#bbb',
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

const mapStateToProps = (state: AppState) => ({
  todos: state.todos,
})

const mapDispatchToProps = {
  onAddTodo: addTodo,
  onDoneTodo: doneTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosRedux)
