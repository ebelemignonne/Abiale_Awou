import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Accept from './components/Accept';
import Inscription from './components/Inscription';
import Conditions from "./components/Conditions"
import Connexion from './components/Connexion';
import Politiques from './components/Politiques';
import Choix from './components/Choix';
import Password from './components/Password';
import Accueil from './components/Accueil';
import Menu from './header/menu/Menu';
import Compte from './header/mon_profile/Compte';
import Classeur from './components/Classeur des actes/mon-classeur/Classeur';
import Naissance from './components/Naissance//Naissance';
import Deces from './components/Deces_deuil/Deces';
import Declaration from './components/Naissance/Declaration_naissance/Declaration';
import Reclamation from './components/Naissance/Reclamation_copie/Reclamation';
import Modification from './components/Naissance/Modification_d\'acte/Modification';
import Retranscription from './components/Naissance/Retranscription_d\'actes/Retranscription';

function App() {
  return (
    <div className='accueille'>
        
    <BrowserRouter>
      <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Accept" element={<Accept />} />
            <Route path="/Inscription" element={<Inscription />} />
            <Route path="/Conditions" element={<Conditions />} />
            <Route path="/Connexion" element={<Connexion />} />
            <Route path="/Politiques" element={<Politiques />} />
            <Route path="/Choix" element={<Choix />} />
            <Route path="/Instcription" element={<Inscription />} />
            <Route path="/Password" element={<Password />} />
            <Route path="/Accueil" element={<Accueil />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/Compte" element={<Compte />} />
            <Route path="/Classeur" element={<Classeur />} />
            <Route path="/Naissance" element={<Naissance />} />
            <Route path="/Deces" element={<Deces />} />
            <Route path="/Declaration" element={<Declaration />} />
            <Route path="/Reclamation" element={<Reclamation />} />
            <Route path="/Modification" element={<Modification />} />
            <Route path="/Retranscription" element={<Retranscription />} />
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
