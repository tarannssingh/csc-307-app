// src/main.jsx
import React from "react";
import ReactDOMClient from "react-dom/client";
import MyApp from "./MyApp";
import "./main.css"; 



// Get the root container
const container = document.getElementById("root")

// Create the react root inside the container
const root = ReactDOMClient.createRoot(container)

// Initial reder: Render an element to the Root
root.render(<MyApp/>);
