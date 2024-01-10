import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FinalMyGrowth from './screens/FinalMyGrowth/FinalMyGrowth';
import Appreciation from './screens/Appreciation/Appreciation';
import BadgesAndAchievements from './screens/BadgesAndAchievements/BadgesAndAchievements';
import { MyWellbeing } from "./screens/MyWellbeing/MyWellbeing";


const app = document.getElementById("root");
const root = createRoot(app);

const App = () => (
  <Router>
    <div>
    <Routes>
        <Route path="/" element={<FinalMyGrowth/> } />
        <Route path="/Appreciation" element={<Appreciation/> } />
        <Route path="/BadgesAndAchievements" element={<BadgesAndAchievements/> } />
        <Route path="/MyWellbeing" element={<MyWellbeing/> } />
    </Routes>
    </div>
  </Router>
);

root.render(<App />);
