import Settings from "./components/Settings";
import View from "./components/View";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { postSlice } from "./store/reducers/PostSlice";

function App() {
  const dispatch = useDispatch();
  const { getLocalData } = postSlice.actions;

  useEffect(() => {
    dispatch(getLocalData());
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 text-bg-light">
          <Settings />
        </div>
        <div className="col-6">
          <div className="row align-items-center">
            <View />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
