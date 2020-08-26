export type User = {
  username: null | string
}

export interface TodoItem {
  id: number
  text?: string
  completed?: boolean
}

export interface Todos extends Array<TodoItem> {}

export interface Actions {
  type: string
  todo: TodoItem
}

export interface AppState {
  todos: Todos
}
