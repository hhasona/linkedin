import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoading: false,
  error: null,
  data: null,
}

export const viewSlice = createSlice({
  name: "view",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    loading: (state) => {
      state.isLoading = true
    },
    success: (state, action) => {
      state.isLoading = false
      state.data = action.payload
    },
    failure: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const { loading, success, failure } = viewSlice.actions

export const selectView = (state) => state.view

export default viewSlice.reducer
