import "./assets/style.css";
import "./assets/design.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PreLand from "./components/pre-land";
import Home from "./components/home";
export default () => {
  return (
    <div className="h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<PreLand />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};
