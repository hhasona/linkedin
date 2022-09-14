import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../features/userSlice"
import viewReducer from "../features/viewSlice"
export const store = configureStore({
  reducer: {
    user: userReducer,
    view: viewReducer,
  },
})
