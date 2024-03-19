
import './App.css'
import {BrowserRouter} from "react-router-dom";
import React from "react";
import Hero from "./components/hero/Hero.jsx";
import OurTeam from "./components/ourTeam/OurTeam.jsx";
import Services from "./components/services/Services.jsx";
import Contacts from "./components/contacts/Contacts.jsx";
import CulturalInterests from "./components/сulturalInterests/CulturalInterests.jsx";


function App() {


  return (
      <div className='App'>
        <Hero/>
          <Services/>
          <CulturalInterests/>
          <Contacts/>
      </div>
  )
}

export default App
