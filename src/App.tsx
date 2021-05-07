import React from "react";
import "./App.css";

import HelloWorld from "./components/HelloWorld";

import HelloWorld2 from "./components/HelloWorld2";
import HelloWorld3 from "./components/HelloWorld3";


const App: React.FC = () => {
  return (
    <div>
      <p className="title has-text-centered" style={{backgroundColor:'purple'}}>QRCode Generator</p>
      <div className="Container">
        <div className="Column1">
          <HelloWorld/>
        </div>
      </div>
      <div className="Container">
      <div className="Column2">
        <HelloWorld2/>
      </div>
    </div>
    <div className="Container">
      <div className="Column3">
        <HelloWorld3/>
      </div>
    </div>
    <p className="title has-text-centered"has-text-white style={{backgroundColor:'grey'}}>Half CA Assignment</p>
    </div>
  );
  }

export default App;
