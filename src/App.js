import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Service from "./Pages/Servise";
import Methods from "./Pages/Methods";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Pages/Contact";
import Packages from "./Pages/Packages.jsx";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Packages" element={<Packages />} />
          <Route path="/Methods/:id" element={<Methods />} />
          <Route path="/Servise/:id" element={<Service />} />
        </Routes>
        <div className="fast-container">
          <p className="fast-message">
            هل تحتاج الى خبير التسويق ؟<br />
            خبير التسويق هو شخص تم تدريبه لفهم السوق المستهدف ووضع استراتيجية
            وتنفيذ الخطط وقياس وتحليل النتائج
          </p>
          <span></span>
          <a
            href="https://wa.me/+905347075309"
            target="_blank"
            rel="noreferrer"
            className="fast"
          >
            <WhatsAppIcon />
          </a>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
