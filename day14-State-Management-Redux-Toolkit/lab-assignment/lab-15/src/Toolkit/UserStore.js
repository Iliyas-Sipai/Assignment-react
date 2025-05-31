import { configureStore } from '@reduxjs/toolkit'
import UserReduser from './UserReduser'

const UserStore = configureStore({
    reducer:{
        "user":UserReduser
    }
})

export default UserStore