import { configureStore } from "@reduxjs/toolkit";
import appToggleSlice from "./appToggleSlice";

const store = configureStore({
  // add slice
  reducer: {
    // app is name string that we gave to slice appToggleSlice
    app: appToggleSlice,
  },
});
export default store;
