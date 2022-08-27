import React from "react";
import { useSelector } from "react-redux";

function View() {
  const {
    post: { title, desc, header, image },
  } = useSelector((state) => state.postReducer);

  return (
    <div className="p-4">
      <div className="card mb-3">
        {header.show && <div className="card-header">{header.text}</div>}
        <div className="card-body p-0">
          {image.show && image.elem && (
            <div className="image-wrapper">
              <img src={image.elem} alt="preview" />
            </div>
          )}
          <div className="p-3">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
