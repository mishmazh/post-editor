import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: {
    title: "",
    desc: "",
    header: {
      show: false,
      text: "",
    },
    image: {
      show: false,
      elem: null,
    },
  },
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    changeTitle(state, action) {
      state.post.title = action.payload;
    },
    changeDesc(state, action) {
      state.post.desc = action.payload;
    },
    toggleHeader(state, action) {
      state.post.header.show = action.payload;
    },
    toggleImage(state, action) {
      state.post.image.show = action.payload;
    },
    changeHeader(state, action) {
      state.post.header.text = action.payload;
    },
    changeImage(state, action) {
      state.post.image.elem = action.payload;
    },
    saveChanges(state) {
      localStorage.setItem("post-editor", JSON.stringify(state.post));
    },
    getLocalData(state) {
      state.post = JSON.parse(localStorage.getItem("post-editor"));
    },
  },
});

export default postSlice.reducer;
