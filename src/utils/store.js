import {configureStore} from '@reduxjs/toolkit';
import appSlice from "./appSlice";
import suggestionsSlice from './suggestionsSlice';

const store = configureStore({
    reducer:{
      appSlice:appSlice,
      suggestions:suggestionsSlice,
    
    }
})

export default store;