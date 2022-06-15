import React from "react";

//Importing Components
import BreakdownList from "./components/BreakdownList";
import Header from "./components/Nav";
import SelectRadio from "./components/ServiceRadio";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="card">
        <div className="container">
          <SelectRadio />
          <BreakdownList />
        </div>
      </div>
    </div >
  );
}

export default App;
