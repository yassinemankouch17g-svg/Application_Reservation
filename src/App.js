import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";

import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* Navbar toujours visible */}
      <header>
        <Navbar />
      </header>

      {/* Contenu des pages */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
