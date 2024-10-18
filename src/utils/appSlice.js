import {createSlice} from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"appSlice",
    initialState:{
        showSideNav:true
    },
    reducers:{
        toggleSideNav: (state)=>{
            state.showSideNav = !state.showSideNav;
        }
    }
})

export const {toggleSideNav} = appSlice.actions;
export default appSlice.reducer;