import React, { useState } from 'react'
import './MyStyle.css'

function Counter() {
    const [count,setCount] = useState(0)
    const add = () => {
      setCount(count+1)
    }
    const reset = () => {
      setCount(0)
    }
  return (
    <>
        <div className='btn'>
              <h1>Count is <span>{count}</span> </h1>
              <button onClick={add}>Add</button>
              <button onClick= { () => setCount(count-1)}>Remove</button>
              <button onClick={reset}>Reset</button>
        </div>
    </>
  )
}

export default Counter
