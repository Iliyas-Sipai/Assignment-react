import React from 'react'
import './MyStyle.css'

function UserData({name,city,age}) {
    
  return (
    <>
    <div className=' user-card'>
      <h1> {name}</h1>
       <h2>age is {age}</h2>
       <h2>city is {city}</h2>
       </div>
    </>
  )
}

export default UserData
