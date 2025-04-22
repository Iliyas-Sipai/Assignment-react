import React, { useState } from 'react'
   
const FormCompo = () => {
    const [inputvalue,newValue] = useState('')

    const onchaHandler = (event) => {
        newValue(event.target.value);
    }

  return (
    <>
     <h2>Live Input</h2>

     <form action="#">
     <div class="mb-3">
         <input type="text" class="form-control"
          id="exampleInputEmail1" aria-describedby="emailHelp"
          placeholder='type something'
          value={inputvalue}
          onChange={onchaHandler}/>
     </div>
          

          <p className='text-danger'>{inputvalue}</p>
     </form>
    </>
  )
}

export default FormCompo
