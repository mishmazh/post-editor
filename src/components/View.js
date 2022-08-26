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
          <div>
            <img src="https://sun9-3.userapi.com/impg/AouKhIutuJB2q_Q-bspPGKAIf6pn4xw8EdPEfQ/vCkePhGb_4k.jpg?size=465x499&quality=95&sign=31364f803367d8c9398530273507163a&type=album" alt="preview" />
          </div>
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
