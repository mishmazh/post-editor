import { useDispatch } from "react-redux";

function ImageSwitch({ image, toggleImage, changeImage }) {
  const dispatch = useDispatch();

  const changeImageHandler = (e) => {
    e.preventDefault();
    dispatch(changeImage(e.target.files[0]));
  };

  return (
    <>
      <div className="form-check form-switch mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="imageSwitch"
          onChange={(e) => dispatch(toggleImage(e.target.checked))}
        />
        <label className="form-check-label" htmlFor="imageSwitch">
          image
        </label>
      </div>
      {image.show && (
        <div className="mt-3">
          <input type="file" accept="image/*" onChange={changeImageHandler} />
        </div>
      )}
    </>
  );
}

export default ImageSwitch;
