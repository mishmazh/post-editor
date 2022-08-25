import Settings from "./components/Settings";
import View from "./components/View";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
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
