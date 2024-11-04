import {configureStore} from '@reduxjs/toolkit';
import appSlice from "./appSlice";
import suggestionsSlice from './suggestionsSlice';
import liveChatSlice from './liveChatSlice';

const store = configureStore({
    reducer:{
      appSlice:appSlice,
      suggestions:suggestionsSlice,
      liveChat:liveChatSlice,
    
    }
})

export default store;