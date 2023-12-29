import React from "react";
import ReactDOMClient from "react-dom/client";
import { FinalMyGrowth } from "./screens/FinalMyGrowth";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<FinalMyGrowth />);
