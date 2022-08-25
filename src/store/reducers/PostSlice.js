import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "123",
  desc: "456",
  header: {
    show: true,
    text: "",
  },
  image: {
    show: false,
    elem: null,
  },
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    changeTitle(state, action) {
      state.title = action.payload;
    },
    changeDesc(state, action) {
      state.desc = action.payload;
    },
    toggleHeader(state, action) {
      state.header.show = action.payload;
    },
  },
});

export default postSlice.reducer;
