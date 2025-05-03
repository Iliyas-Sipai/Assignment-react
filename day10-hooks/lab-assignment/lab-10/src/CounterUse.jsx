import React, { useState } from 'react'

function CounterUse () {
    const [count,setCount] = useState(0)

    const addCount = () => {
      setCount(count+1)
    }
    
    const removeCount = () => {
      setCount(count-1)
    }
    
    const resetCount = () => {
      setCount(0)
    }
  return (
    <>
         <h1>Count is -- {count}</h1>
         <div style={{ gridTemplateColumns: '1fr 1fr 1fr' }} className="d-grid gap-3 row-gap-2 mt-5 ">
              <button className='btn btn-primary ' onClick={addCount}>Add</button>
              <button className='btn btn-primary' onClick={removeCount}>Remove</button>
              <button className='btn btn-primary' onClick={resetCount}>Reset</button>
         </div>
    </>
  )
}

export default CounterUse
