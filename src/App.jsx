import Topbar from "./Components/layout/Topbar";
import Logo from "./Components/ui/Logo";
// import NavBar from "./Components/ui/NavBar";
import Home from "./pages/Home";
import "../App.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Topbar />
        <Logo />
        <Home />
      </div>
    </div>
  );
}

export default App;
