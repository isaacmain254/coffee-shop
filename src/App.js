import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Menu />
      <About />
      <Shop />
      <Footer />
    </div>
  );
}

export default App;
