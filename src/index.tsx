import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import Home from "./pages/Home";
import Page from "./components/Page";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Stats from "./pages/Stats";
import Settings from "./pages/Settings";
import { store } from "./store";
import { Provider } from "react-redux";
import { loadPomodoros } from "./slices/pomodoroSlice";

const container = document.getElementById("root");
const root = createRoot(container!);

store.dispatch(loadPomodoros());

root.render(
  <React.StrictMode>
    <Provider store={store}>
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
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
