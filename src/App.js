import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './index.js';
import Landing from './pages/Landing.js';
import Backstory from './pages/Backstory';
import Adventures from './pages/Adventures';
import SkillsProficiencies from './pages/SkillsProficiencies';
import Message from './components/Message'

export const CastMessageContext = React.createContext({
});

function App() {
  const [castMessage, setCastMessage] = useState(false);

  const handleMessageCasting = e => {
    e.preventDefault();
    console.log('ready to cast');
    setCastMessage(!castMessage);
  }

  return (
    <CastMessageContext.Provider value={{ handleMessageCasting, setCastMessage }}>
      <Router>

        <Route exact path="/" component={Landing} />
        <Route exact path="/Backstory" component={Backstory} />
        <Route exact path="/Adventures" component={Adventures} />
        <Route exact path="/SkillsProficiencies" component={SkillsProficiencies} />
        {castMessage && <Message />}

      </Router>
    </CastMessageContext.Provider>
  );
}

export default App;
