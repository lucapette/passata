import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Stats from "./pages/Stats";
import Navigation from "./components/Navigation";
import { Content, Footer, Section } from "react-bulma-components";

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <>
      <div className="wrap">
        <Navigation></Navigation>
        <Section>
          <Content>{children}</Content>
        </Section>
      </div>
      <Footer></Footer>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        ></Route>
        <Route
          path="/stats"
          element={
            <Layout>
              <Stats />
            </Layout>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
