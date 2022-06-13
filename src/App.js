import React from "react";
import { BreakdownProvider } from "./BreakdownContext";

//Importing Components
import BreakdownList from "./components/BreakdownList";
import Header from "./components/Nav";
import SelectRadio from "./components/ServiceRadio";

import "./App.css";


function App() {
  return (
    <div className="App">
      <BreakdownProvider>
        <Header />
        <div className="card">
          <div className="container">
            <SelectRadio />
            <BreakdownList />
          </div>
        </div>
      </BreakdownProvider >
    </div >
  );
}

export default App;