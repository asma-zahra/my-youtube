import { createSlice } from "@reduxjs/toolkit";

const appToggleSlice = createSlice({
  // remember name must be string
  name: "app",
  initialState: {
    isSidebaropen: true,
  },
  reducers: {
    //actions
    toggleNav: (state) => {
      //change initialstate using this reducer function, already true, now become false
      state.isSidebaropen = !state.isSidebaropen;
    },
    closeNav: (state) => {
      state.isSidebaropen = false;
    },
  },
});
//export actions
export const { toggleNav, closeNav } = appToggleSlice.actions;
export default appToggleSlice.reducer;
