import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import Layout from "./component/Layout";
export const DarkModeContext = createContext();

function App({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  if (typeof window !== "undefined") {
    const originalError = console.warn;
    console.warn = (...args) => {
      if (
        args[0] &&
        typeof args[0] === "string" &&
        args[0].includes("componentWillReceiveProps has been renamed")
      ) {
        return;
      }
      originalError.call(console, ...args);
    };
  }
  if (typeof window !== "undefined") {
    const originalError = console.warn;
    console.warn = (...args) => {
      if (
        args[0] &&
        typeof args[0] === "string" &&
        args[0].includes("componentWillUpdate has been renamed, ")
      ) {
        return;
      }
      originalError.call(console, ...args);
    };
  }
  return (
    <Router>
      <div className='App'>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.part}
                element={
                  <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
                    <Layout>
                      <Page />
                    </Layout>{" "}
                  </DarkModeContext.Provider>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
