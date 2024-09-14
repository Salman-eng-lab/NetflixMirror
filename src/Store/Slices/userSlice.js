import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'user',
    initialState:null,
    reducers:{
        setUserData:(state,actions)=>{
          return actions.payload
        },
        deleteUserData:(state,actions)=>{
            return null
        }
    }
})

export const {setUserData,deleteUserData}=userSlice.actions

export default userSlice.reducer