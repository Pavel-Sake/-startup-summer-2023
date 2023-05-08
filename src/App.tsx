import React from "react";

import "./App.css";
import { Header } from "./components/header/Header";
import { Main } from "./pages/main/Main";


function App() {

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
