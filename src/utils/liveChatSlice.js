import {createSlice} from '@reduxjs/toolkit'

const liveChatSlice = createSlice({
    name:"liveChatSlice",
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            state.messages.splice(15,1);
            state.messages.unshift(action.payload)
        }
    }
})

export const {addMessage} = liveChatSlice.actions;
export default liveChatSlice.reducer;