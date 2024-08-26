import { Reducer, combineReducers } from "@reduxjs/toolkit";
import { AppState } from "./interfaces/AppState";
// import AuthReducer from "../domain/auth/store/reducer/AuthReducer";


export const rootReducer : Reducer<AppState> = combineReducers({
    auth : {},
})