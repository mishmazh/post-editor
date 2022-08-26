import { useDispatch } from "react-redux";
import { useState } from "react";

function DragAndDrop({ changeImage }) {
  const [drag, setDrag] = useState(false);
  const dispatch = useDispatch();

  const onDragStartHandler = (e) => {
    e.preventDefault();
    setDrag(true);
  };

  const onDragLeaveHandler = (e) => {
    e.preventDefault();
    setDrag(false);
  };

  const onDropHandler = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    reader.onloadend = () => {
      dispatch(changeImage(reader.result));
    };
    reader.readAsDataURL(e.dataTransfer.files[0]);

    setDrag(false);
  };

  return (
    <>
      {drag ? (
        <div
          className="drag-and-drop border-primary border-opacity-50"
          onDragStart={(e) => onDragStartHandler(e)}
          onDragLeave={(e) => onDragLeaveHandler(e)}
          onDragOver={(e) => onDragStartHandler(e)}
          onDrop={(e) => onDropHandler(e)}
        >
          Drop image here
        </div>
      ) : (
        <div
          className="drag-and-drop"
          onDragStart={(e) => onDragStartHandler(e)}
          onDragLeave={(e) => onDragLeaveHandler(e)}
          onDragOver={(e) => onDragStartHandler(e)}
        >
          Drag and drop image here
        </div>
      )}
    </>
  );
}

export default DragAndDrop;
