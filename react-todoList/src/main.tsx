import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Context
import { ContextProvider } from "./Context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
