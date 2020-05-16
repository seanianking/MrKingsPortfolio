import React from 'react';
import './index.js';
import Landing from './components/pages/Landing.js';
import Backstory from './components/pages/Backstory.js';
import Adventures from './components/pages/Adventures.js';
import SkillsProficiencies from './components/pages/SkillsProficiencies.js';


function App() {
  return (
    <div className="App">
      <Landing/>
      <Backstory/>
      <Adventures/>
      <SkillsProficiencies/>
    </div>
  );
}

export default App;
