import React from "react";
import Nav from "./Components/Nav";
import 'bootstrap/dist/css/bootstrap.css';
import Form from "./Components/Form";
import FormHook from "./Components/FormHook";

import Movie from "./Components/Movie";
import Parent from "./Components/Parent";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import MovieDet from "./Components/MovieDet";
import Auth from "./Components/Auth";
import MuiTest from "./Components/MuiTest";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<FormHook />} />
        <Route element={<Auth />}>
          <Route path="/movie" element={<Movie />} />
          <Route path="/moviedet/:id" element={<MovieDet />} />
        </Route>
        <Route path="/mui" element={<Parent />} />
      </Routes>

    </React.Fragment>
  )
}

export default App
