import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Product from "./components/product";
import Contact from "./components/contact";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Home/>
      <About/>
      <Product/>
      <Contact/>
    </div>
  );
}

export default App;
