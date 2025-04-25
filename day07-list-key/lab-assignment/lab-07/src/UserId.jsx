import React from 'react'

const UserId = () => {

    const UserId = [
        {id:1,name:'iliyas',age:20},
        {id:2,name:'aman',age:20},
        {id:3,name:'alfaj',age:21},
        {id:4,name:'dipak',age:20},
        {id:5,name:'manav',age:21}
    ]
  return (
    <>
         <ul>
            { UserId.map(user=>{
               return(
                <li key={user.id}>{user.name}</li>
               )
              })
            }
         </ul>
    </>
  )
}

export default UserId
