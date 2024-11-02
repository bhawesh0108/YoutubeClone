import {createSlice} from "@reduxjs/toolkit"


const suggestionsSlice = createSlice({
    name:"suggestions",
    initialState:{

    },
    reducers:{
        setSuggestionsMemo:(state,action)=>{
            state = Object.assign(state, action.payload)
        }
    }
})

export const {setSuggestionsMemo} = suggestionsSlice.actions;

export default suggestionsSlice.reducer;