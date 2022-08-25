import React from "react";
import HeaderSwitch from "./HeaderSwitch";
import ImageSwitch from "./ImageSwitch";

function Settings() {
  return (
    <div className="p-4">
      <h1 className="mb-4">Settings</h1>

      <input className="form-control mb-3" type="text" />
      <textarea className="form-control mb-3"></textarea>

      <HeaderSwitch />
      <ImageSwitch />

      <button className="btn btn-primary mt-3">Save</button>
    </div>
  );
}

export default Settings;
