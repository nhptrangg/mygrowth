import React from "react";
import ReactDOMClient from "react-dom/client";
import FinalMyGrowth from './screens/FinalMyGrowth/FinalMyGrowth'
import Appreciation from './screens/Appreciation/Appreciation'

const app = document.getElementById("root");
const root = ReactDOMClient.createRoot(app);
root.render(<FinalMyGrowth />);

