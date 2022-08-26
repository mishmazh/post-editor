import React from "react";
import HeaderSwitch from "./HeaderSwitch";
import ImageSwitch from "./ImageSwitch";
import { useDispatch, useSelector } from "react-redux";
import { postSlice } from "../store/reducers/PostSlice";

function Settings() {
  const {
    post: { title, desc, header, image },
  } = useSelector((state) => state.postReducer);
  const {
    changeTitle,
    changeDesc,
    toggleHeader,
    toggleImage,
    changeHeader,
    changeImage,
  } = postSlice.actions;
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h1 className="mb-4">Settings</h1>

      <input
        className="form-control mb-3"
        type="text"
        value={title}
        onChange={(e) => dispatch(changeTitle(e.target.value))}
      />
      <textarea
        className="form-control mb-3"
        value={desc}
        onChange={(e) => dispatch(changeDesc(e.target.value))}
      />

      <HeaderSwitch
        header={header}
        toggleHeader={toggleHeader}
        changeHeader={changeHeader}
      />
      <ImageSwitch
        image={image}
        toggleImage={toggleImage}
        changeImage={changeImage}
      />

      <button className="btn btn-primary mt-3">Save</button>
    </div>
  );
}

export default Settings;
