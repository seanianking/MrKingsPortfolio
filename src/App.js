import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './index.js';
import Landing from './pages/Landing.js';
import Backstory from './pages/Backstory';
import Adventures from './pages/Adventures';
import SkillsProficiencies from './pages/SkillsProficiencies';
import CastMessage from './components/CastMessage.js';


function App() {
  return (
    <Router>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/Backstory" component={Backstory}/>
      <Route exact path="/Adventures" component={Adventures}/>
      <Route exact path="/SkillsProficiencies" component={SkillsProficiencies}/>
      <CastMessage/>
    </Router>    
  );
}

export default App;
