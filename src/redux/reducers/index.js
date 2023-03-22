import { combineReducers } from "@reduxjs/toolkit";
import folderReducer from "./folderReducer";

const rootReducer = combineReducers({
    folder : folderReducer
})

export default rootReducer;