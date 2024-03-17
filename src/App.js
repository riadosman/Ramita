import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Service from "./Pages/Servise";
import Methods from "./Pages/Methods";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Pages/Contact";
import Packages from "./Pages/Packages.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Packages" element={<Packages />} />
          <Route path="/Methods/:id" element={<Methods />} />
          <Route path="/Servise/:id" element={<Service />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
