import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

function App() {
  return (
    <div className="bg-ifnu">
      <Navbar />
      <Home />
      <Project />
      <About />
    </div>
  );
}

export default App;
