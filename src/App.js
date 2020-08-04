import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import WelcomePage from './pages/welcome'
import InfoAkademik from './pages/infoAkademik'
import InfoKampus from './pages/infoKampus'
import InfoPacil from './pages/infoPacil'
import KanalInformasi from './pages/kanalInfo'
import Aaya from './pages/aaya'

function App() {  
  return (
    <Router>
      <Switch>
        <Route path="/akademik"><InfoAkademik /></Route>
        <Route path="/kampus"><InfoKampus /></Route>
        <Route path="/fasilkom"><InfoPacil /></Route>
        <Route path="/informasi"><KanalInformasi /></Route>
        <Route path="/aaya"><Aaya /></Route>
        <Route path="/"><WelcomePage /></Route>
      </Switch>
    </Router>
  );
}

export default App;
