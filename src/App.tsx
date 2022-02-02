import "./App.css";
import Home from "./routes/Home";
import "antd/dist/antd.css";
import Skills from "routes/Skills";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "routes/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
