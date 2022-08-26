import { useDispatch } from "react-redux";
import DragAndDrop from "./DragAndDrop";

function ImageSwitch({ image, toggleImage, changeImage }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="form-check form-switch mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="imageSwitch"
          onChange={(e) => dispatch(toggleImage(e.target.checked))}
          checked={image.show}
        />
        <label className="form-check-label" htmlFor="imageSwitch">
          image
        </label>
      </div>
      {image.show && (
        <div className="mt-3">
          <DragAndDrop changeImage={changeImage}/>
        </div>
      )}
    </>
  );
}

export default ImageSwitch;
