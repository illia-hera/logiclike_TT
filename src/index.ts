import React from "react";
import App from "./app";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("app") || document.createElement("div"));
root.render(React.createElement(App, { app: this }, null));