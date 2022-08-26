import { useDispatch } from "react-redux";

function HeaderSwitch({ header, toggleHeader, changeHeader }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="form-check form-switch mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="headerSwitch"
          onChange={(e) => dispatch(toggleHeader(e.target.checked))}
          checked={header.show}
        />
        <label className="form-check-label" htmlFor="headerSwitch">
          header
        </label>
      </div>
      {header.show && (
        <input
          className="form-control mb-3"
          type="text"
          onChange={(e) => dispatch(changeHeader(e.target.value))}
        />
      )}
    </>
  );
}

export default HeaderSwitch;
