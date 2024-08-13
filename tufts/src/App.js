import React, {useState} from "react";
import Header from "./Header"
import Footer from "./Footer"
import Rug from "./Rug"
import Card from "./card"

function App() {
 
  return (
    <>
      <Header />
      <Rug />
      <Card />
      <Footer />
      {/* <input type="text" />
      <button> Add cart</button>
      <button>clear complete</button>
      <div> </div> */}
    </>

  );
}

export default App;
