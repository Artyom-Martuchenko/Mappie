import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import savedTopicsReducer from "./reducers/savedTopicsSlice";
import infrastucuterReducer from "./reducers/infrastructureSlice";

const rootReducer = configureStore({
  reducer: {
    savedTopics: savedTopicsReducer,
    infrastructure: infrastucuterReducer
  }
});

export type RootState = ReturnType<typeof rootReducer.getState>;
export type AppDispatch = typeof rootReducer.dispatch;
export default rootReducer;