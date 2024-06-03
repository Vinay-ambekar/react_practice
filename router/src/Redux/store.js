import { configureStore } from "@reduxjs/toolkit";
import ListsSlice from "./ListsSlice";/* lsitSlice reducer */

const store=configureStore({
    reducer:{
        lists:ListsSlice
    }
})
export default store