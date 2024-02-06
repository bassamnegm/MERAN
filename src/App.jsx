import React from "react";
import Image from "./Components/Image";
import Nav from "./Components/Nav";


function App() {


  let div = document.createElement("div");
  let mydiv = <h2>iti aswan</h2>;
  return (
    <React.Fragment>
      <Nav />
      <Image />
    </React.Fragment>
  )
}

export default App
