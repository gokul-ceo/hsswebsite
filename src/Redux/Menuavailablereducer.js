import { createSlice } from "@reduxjs/toolkit";
export const Menulistslice = createSlice({
  name: "MenuList",
  initialState: {
    MenuList: [],
    loading: false,
    error: null,
  },
  reducers: {
    Info_Fetch_Menu: (state) => {
      state.loading = true;
    },
    Info_Fetch_Menu_SUCCESS: (state, action) => {
      // [...state,state.MenuList = action.payload]
      state.MenuList = action.payload;
      state.loading = false;
      state.error = null;
    },
    Info_Fetch_Menu_FAILURE: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  Info_Fetch_Menu,
  Info_Fetch_Menu_FAILURE,
  Info_Fetch_Menu_SUCCESS,
} = Menulistslice.actions;
export default Menulistslice.reducer;
