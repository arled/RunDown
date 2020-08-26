import * as React from 'react'
import { Button, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import ScrollLayout from '@rundown-components/ScrollLayout'
import Header from '@rundown-components/Header'
import { addTodo, doneTodo } from '../actions/todos/todosActions'
import { AppState, Todos } from '@rundown-types/Types'
import InputField from '@rundown-components/InputField'

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

  return (
    <ScrollLayout testID="TodosRedux screen" showSafeAreaTop={false}>
      <Header title="TODO REDUX" />
      <InputField value={value} onChange={(value) => setValue(value)} />
      {/* TODO: Create Button component. */}
      <Button title="ADD" onPress={() => onPressAddTodo()} />
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
                borderColor: item.completed ? 'green' : '#bbb',
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
