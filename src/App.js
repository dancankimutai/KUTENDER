import React from 'react';
//import logo from './logo.svg';
import Tenders from './components/tenderpost/tenders';
import { useState } from "react";

import './App.css';
import Home from "./components/home/Home";

function App() {
  const [connectHome,setConnectHome] = useState(true)
  return (
    <div className="App">
      {connectHome &&<Home onTenders={setConnectHome}/> }
      {!connectHome &&<Tenders /> }
     
    </div>
  );
}

export default App;
