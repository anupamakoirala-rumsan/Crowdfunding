import React, { useState } from "react";
import './App.css';
import Project from "./Project";
import Addproject from "./Addproject";
function App(){
  return(
      <div className ="main">
    <h1> CrowdFunding</h1>
    <div className="details">
      <p>
        Lets utilize Ether and blockchain to fund the needy Project.
      </p>
    </div>
      <Addproject/>
      <br/>
      <Project/>
     
    </div>
  )

}
export default App;