import {createSlice} from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"appSlice",
    initialState:{
        showSideNav:true
    },
    reducers:{
        toggleSideNav: (state)=>{
            state.showSideNav = !state.showSideNav;
        },
        closeSideNav:(state)=>{
            state.showSideNav = false;
        }
    }
})

export const {toggleSideNav,closeSideNav} = appSlice.actions;
export default appSlice.reducer;