import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../store/userSlice";

// const reducer = combineReducers({
//   userSlice: userSlice
// });

const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
});
export default store;
