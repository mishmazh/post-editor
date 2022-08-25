import React, { useState } from "react";

function ImageSwitch() {
  const [image, setImage] = useState(false);

  return (
    <>
      <div className="form-check form-switch mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="imageSwitch"
          onChange={() => setImage(!image)}
        />
        <label className="form-check-label" htmlFor="imageSwitch">
          image
        </label>
      </div>
      {image && <textarea className="form-control mt-3"></textarea>}
    </>
  );
}

export default ImageSwitch;
