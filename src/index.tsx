import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MantineProvider } from "@mantine/core";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { setupStore } from "./store/store";

const store = setupStore();


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </MantineProvider>
  </React.StrictMode>
);

reportWebVitals();
