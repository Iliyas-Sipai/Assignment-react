import React from 'react'
import ReducerCounter from '../Reduser/ReducerCounter'
import { createStore } from 'redux'

const CounterStore = createStore(ReducerCounter) 

export default CounterStore
