import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home";
import Page from "./components/Page";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Stats from "./pages/Stats";
import Settings from "./pages/Settings";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Page title="Get it done!">
              <Home />
            </Page>
          }
        ></Route>
        <Route
          path="/stats"
          element={
            <Page title="Stats">
              <Stats />
            </Page>
          }
        ></Route>
        <Route
          path="/settings"
          element={
            <Page title="Settings">
              <Settings />
            </Page>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
