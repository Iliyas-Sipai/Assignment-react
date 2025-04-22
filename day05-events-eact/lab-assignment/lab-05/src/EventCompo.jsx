import React, { useState } from 'react'

const EventCompo = () => {
   const [text,setText] = useState('Noclicked')

    const changeClick = () => {
           setText("Cliked")
    }
  return (
    <>
    <h1 style={{color:'red'}}>{text}</h1>
        <button class="btn btn-warning" onClick={changeClick}>Click</button>  
    </>
  )
}
export default EventCompo