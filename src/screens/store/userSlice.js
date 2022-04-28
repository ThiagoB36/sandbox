import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "user",
  initialState: {
    user: "",
    isLogged: false
  },

  reducer: {
    changeUser(state, { payload }) {
      return { ...state, isLogged: true, user: payload };
    },
    logout(state) {
      return { ...state, isLogged: false, user: "" };
    }
  }
});

export const { changeUser, logout } = counterSlice.actions;
export default counterSlice.reducer;
export const selectUser = (state) => state.user;
