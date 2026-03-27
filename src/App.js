import { Routes, Route, Link } from "react-router-dom";
import Accueil from "./Accueil";
import Apropos from "./Apropos";
import Connexion from "./Connexion";
import './App.css';

function App() {

  return (
    <div>
      <h1 className="title">Mon application react</h1>
      <nav>
        <Link to="/">Accueil</Link>
        <br />
        <Link to="apropos">A propos</Link>
      </nav>
      <Connexion />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="apropos" element={<Apropos />} />
      </Routes>
    </div>
  )
}

export default App;