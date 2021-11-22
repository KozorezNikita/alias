import React from "react";
import { HashRouter } from "react-router-dom";
import "./styles/App.css";
import AliasProvider from "./components/AliasProvider";
import AliasRouter from "./components/AliasRouter";

function App() {
  return (
    <AliasProvider>
      <HashRouter basename="/">
        <AliasRouter />
      </HashRouter>
    </AliasProvider>
  );
}

export default App;
