import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import Register from "./Components/Register";
import View from "./Components/View";
import Edit from "./Components/Edit";

function App() {
  return (
    <>
      <h1>CRUD MERN Project</h1>
      <hr />

      <View />
      {/* <Register /> */}
      {/* <Edit /> */}
    </>
  );
}

export default App;
