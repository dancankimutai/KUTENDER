import logo from './logo.svg';
import Tenders from './components/tenderpost/tenders';
import { useState } from "react";
import BiderForm from './components/biderpostform/BiderForm';
import {Helmet} from 'react-helmet';
import './App.css';
import Home from "./components/home/Home";

function App() {
  const [connectHome,setConnectHome] = useState(true)
  //{connectHome &&<Home onTenders={setConnectHome}/> }
  //    {!connectHome &&<Tenders /> }
     
  return (
    <div className="App">
      <Helmet>
      <style>{'body { background-color:#233456 ; }'}</style>
      </Helmet>
      <BiderForm/>
      
    </div>
  );
}

export default App;
