import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  successMessage: "",
  errorMessage: "",
  loading: false,
  isAuthenticated: false,
  token: "",
  user: {},
};
export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: () => {},
});
export default authReducer.reducer;
