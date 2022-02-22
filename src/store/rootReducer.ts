import { combineReducers } from "@reduxjs/toolkit";
import demo from "./demo";

const rootReducer = combineReducers({ demo });

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
