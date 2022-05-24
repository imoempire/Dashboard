import "./App.css";
import MainDash from "./Component/Main/MainDash";
import SideBar from "./Component/SideBar";
import RightSide from "./Component/RigtSide/RightSide";

function App() {
  return (
    <div className="App">
      <div className="ClassBackground">
        <SideBar />
        <div>
        <MainDash/>
        <RightSide/>
        </div>
      </div>
    </div>
  );
}

export default App;
