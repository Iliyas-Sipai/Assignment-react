import React, { useState } from 'react'
function LoginCompo() {
     const [change,setChange] = useState(false);
       const loginChange = () => {
        setChange(!change)
       }
    return (
    <>
         <h2>{change ? 'Welcome back!' : 'Please log in.'}</h2>
       <button onClick={loginChange}>
        {change?'Logout':'Login'}</button>
    </>
  )
}

export default LoginCompo
