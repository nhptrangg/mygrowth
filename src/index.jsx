import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FinalMyGrowth from './screens/FinalMyGrowth/FinalMyGrowth';
import Appreciation from './screens/Appreciation/Appreciation';

const app = document.getElementById("root");
const root = createRoot(app);

const App = () => (
  <Router>
    <div>
    <Routes>
        <Route path="/" element={<FinalMyGrowth/> } />
        <Route path="/Appreciation" element={<Appreciation/> } />
    </Routes>
    </div>
  </Router>
);

root.render(<App />);
