import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import AliasProvider from "./components/AliasProvider";
import AliasRouter from "./components/AliasRouter";

function App() {
  return (
    <AliasProvider>
      <BrowserRouter>
        <AliasRouter />
      </BrowserRouter>
    </AliasProvider>
  );
}

export default App;
