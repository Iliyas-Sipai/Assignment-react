import React from 'react'

function FruitCOmpo() {
let fruit = ["mango","apple","banana",'Orange']

  return (
    <>
        <ul>
         {
            fruit.map((fruit,index) => {
                return (
                    <li key={index} className='text-danager' >{fruit}</li>
                    )
                })
            }
         </ul>
    </>
  )
}

export default FruitCOmpo
