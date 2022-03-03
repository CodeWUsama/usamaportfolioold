import "./App.css";
import Home from "./routes/Home";
import "antd/dist/antd.css";
import Skills from "routes/Skills";
import { HashRouter as BrowserRouter, Route, Routes } from "react-router-dom";
import About from "routes/About";
import Contact from "routes/Contact";
import Experiences from "routes/Experiences";
import Services from "routes/Services";
import { createContext, useEffect, useState } from "react";
import Projects from "routes/Projects";

export const DataContext: any = createContext({});

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleResize() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <DataContext.Provider value={{ width }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
