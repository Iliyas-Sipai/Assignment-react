import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import CounterStore from './Store/CounterStore.js'
import { Provider } from 'react-redux'
import StoreTodo from './To-dolist/StoreTodo.js'
import UserStore from './Toolkit/UserStore.js'

createRoot(document.getElementById('root')).render(
  <Provider store={UserStore}>
    <App />
  </Provider>

  
)
