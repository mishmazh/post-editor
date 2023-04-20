import Settings from "./components/Settings";
import View from "./components/View";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { postSlice } from "./store/reducers/PostSlice";

function App() {
  const dispatch = useDispatch();
  const { getPostData } = postSlice.actions;

  useEffect(() => {
    dispatch(getPostData());
  }, []);

  return (
    <>
      <div className="background" />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Settings />
            </div>
            <div className="col-md-6">
              <div className="row align-items-center">
                <View />
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default App;
