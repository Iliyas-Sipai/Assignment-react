import React from 'react'
import { del, inst, upd } from './ActionTodo'

const intislState = {
    userData:[]
}

const ReducerTodo = (state = intislState,action) => {
  switch(action.type){
    case inst:{
        return {
            ...state,
            userData:[
                ...state.userData,
                action.payload
            ]
        }
    }
    case del:{
        return{
            ...state,
            userData:state.userData.filter((i,index)=>index != action.payload)
        }
    }
    case upd:{
        return{
            ...state,
            userData:state.userData.find((i,index)=>{
                if(index==action.payload.id){
                    i= action.payload.data
                }
                return i 
            })
        }
    }
  }
}

export default ReducerTodo
