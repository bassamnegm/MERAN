import React from "react";
import Nav from "./Components/Nav";
import TestData from "./Components/TestData";
import List from "./Components/List";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <TestData />
      <List />
    </React.Fragment>
  )
}

export default App
