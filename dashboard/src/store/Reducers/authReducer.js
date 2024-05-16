import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const admin_login = createAsyncThunk(
  "auth/admin_login",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("admin-login", info, {
        withCredentials: true,
      });
      localStorage.setItem("accessToken", data.token);
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);
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
  reducers: {
    messageClear: (state) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(admin_login.pending, (state) => {
        state.loading = true;
      })
      .addCase(admin_login.rejected, (state, { payload }) => {
        state.loading = false;
        state.errorMessage = payload.message;
      })
      .addCase(admin_login.fulfilled, (state, { payload }) => {
        console.log(payload.message);
        state.loading = false;
        state.successMessage = payload.message; // Update the success message in the state
      });
  },
});
export const { messageClear } = authReducer.actions;
export default authReducer.reducer;
