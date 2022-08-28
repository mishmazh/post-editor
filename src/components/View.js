import { useSelector } from "react-redux";
import Alert from "./Alert";

function View() {
  const {
    post: { title, desc, header, image }, alert
  } = useSelector((state) => state.postReducer);

  return (
    <div className="view m-4">
      {alert && <Alert />}
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
