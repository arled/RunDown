import { combineReducers } from 'redux'

import { todos } from './todos/todosReducer'

export default combineReducers({
  todos,
})
