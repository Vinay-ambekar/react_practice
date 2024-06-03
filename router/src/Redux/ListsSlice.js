import { createSlice } from "@reduxjs/toolkit";

const ListSlice=createSlice({
    name:'Lists',
    initialState:[],
    reducers:{
        add(state,action){
            //console.log('action:',action)
            state.push(action.payload)
        },
        remove(state,action){
            return state.filter((lists)=>lists.id !== action.payload)
        }
    }
})
export const {add,remove} =ListSlice.actions
export default ListSlice.reducer