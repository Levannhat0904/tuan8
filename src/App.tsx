import React, { useState } from "react";
import "./App.css";
import Content from "./content";
import ShoppingCart from "./shoppingcart/Shoppingcart";
import ParentComponent from "./Test";

function App() {
  // console.log("re-render");
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Shopping cart</h1>
        <ShoppingCart /> */}
        <ParentComponent />
      </header>
    </div>
  );
}

export default App;
