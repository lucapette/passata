import "bulma/css/bulma.min.css";
import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import Home from "./pages/Home";
import Page from "./components/Page";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Stats from "./pages/Stats";
import Labels from "./pages/Labels";
import { store } from "./store";
import { Provider } from "react-redux";
import { loadPomodoros } from "./slices/pomodoroSlice";
import { loadLabels } from "./slices/labelSlice";

const container = document.getElementById("root");
const root = createRoot(container!);

store.dispatch(loadPomodoros());
store.dispatch(loadLabels());

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
            path="/labels"
            element={
              <Page title="Labels">
                <Labels />
              </Page>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
