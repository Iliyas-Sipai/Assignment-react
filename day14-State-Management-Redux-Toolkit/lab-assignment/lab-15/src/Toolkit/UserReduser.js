import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data:[],
    
}
const UserReduser = createSlice({
    name:"user",
    initialState,
    reducers:{
        ins:(state,action)=>{
            state.data = [
                    ...state.data,
                    action.payload
            ]
        },
        del :(state,action)=>{
            state.data = state.data.filter((i,index)=>{
                            return index != action.payload
                    })
        },
        upd:(state,action)=>{
            state.data = state.data.map((i,index)=>{
                if(index == action.payload.id){
                    i = action.payload.data
                }
                return i
        })
        }
    }
})
export const {ins,upd,del} = UserReduser.actions
export default UserReduser.reducer