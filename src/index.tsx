import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DogContextProvider } from "./context/dog-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <DogContextProvider>
      <App />
    </DogContextProvider>
  </React.StrictMode>
);
