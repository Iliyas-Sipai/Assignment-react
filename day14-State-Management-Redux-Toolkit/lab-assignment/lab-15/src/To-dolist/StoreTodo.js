import React from 'react'
import ReducerTodo from './ReducerTodo'
import { createStore } from 'redux'

const StoreTodo = createStore(ReducerTodo);

export default StoreTodo
