import React from "react";
import ReactDOM from "react-dom/client";
import { DAppProvider } from "@usedapp/core";
import { DAPP_CONFIG } from "./config.js";

import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DAppProvider config={DAPP_CONFIG} expectedChainId={DAPP_CONFIG.readOnlyChainId}>
      <App />
    </DAppProvider>
  </React.StrictMode>
);
