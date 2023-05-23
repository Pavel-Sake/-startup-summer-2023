import React from "react";

import "./App.css";
import { Main } from "./pages/Main";
import { NotFound } from "./pages/NotFound";
import { Favorites } from "./pages/Favorites";
import { Routes, Route } from "react-router-dom";
import { RootLayout } from "./Layout";
import { Vacancy } from "./pages/Vacancy";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Main />} />
          <Route path="/vacancy/:vacancyId" element={<Vacancy />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
