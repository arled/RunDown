import { Todos, Actions } from '@rundown-types/Types'
import { ADD_TODO, DONE_TODO } from '../../actions/todos/todosActions'

export const todos = (todos: Todos = [], action: Actions) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        { id: action.todo.id, text: action.todo.text, completed: false },
        ...todos,
      ]

    case DONE_TODO:
      return todos.map((todo) =>
        todo.id === action.todo.id
          ? { ...todo, completed: !todo.completed }
          : todo
      )

    // case REMOVE_TODO:
    //   return todos.filter((todo) => todo.id !== action.todo.id)

    default:
      return todos
  }
}
