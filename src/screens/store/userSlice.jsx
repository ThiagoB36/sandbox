import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",

  initialState: {
    Name: ""
    // isLogged: false
  },

  reducers: {
    changeUser: (state, action) => {
      return { ...state, Name: action.payload };
      // return { ...state, Name: payload };

      // state.user = action.payload;
    },
    logout: (state, action) => {
      return { ...state, Name: action.payload };
    }
  }
});

//   logout(state) {
//     return { ...state, user: "" };
//   }
// }
console.log({ userSlice });
export const { changeUser, logout } = userSlice.actions;
console.log({ changeUser });
export default userSlice.reducer;
export const selectUser = (state) => state.user;
