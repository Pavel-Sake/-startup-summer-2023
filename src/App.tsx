import React from "react";

import "./App.css";
import { Header } from "./components/header/Header";
import { Main } from "./pages/main/Main";
import { NotFound } from "./pages/notFound/NotFound";
import { Favorites } from "./pages/favorites/Favorites";
import { Routes, Route } from "react-router-dom";
import { RootLayout } from "./layout/RootLayout";
import {Vacancy} from "./pages/vacancy/Vacancy";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Main />} />
          <Route path="/:vacancyId" element={<Vacancy />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
