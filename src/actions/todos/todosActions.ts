import { Actions } from '@rundown-types/Types'

export const ADD_TODO = 'ADD_TODO'
export const DONE_TODO = 'DONE_TODO'

export const addTodo = (text: string): Actions => ({
  type: ADD_TODO,
  todo: { id: Math.random(), text },
})

export const doneTodo = (id: number): Actions => ({
  type: DONE_TODO,
  todo: { id },
})
