import React, { useState } from "react";

function HeaderSwitch() {
  const [header, setHeader] = useState(false);

  return (
    <>
      <div className="form-check form-switch mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="headerSwitch"
          onChange={() => setHeader(!header)}
        />
        <label className="form-check-label" htmlFor="headerSwitch">
          header
        </label>
      </div>
      {header && <input className="form-control mb-3" type="text" />}
    </>
  );
}

export default HeaderSwitch;
