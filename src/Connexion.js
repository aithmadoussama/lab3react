import { useState } from 'react';

function Connexion() {
  const [connecte, setConnecte] = useState(false);

  return (
    <div className="container">
      {connecte ? (
        <h3 className="connecte">Connecté</h3>
      ) : (
        <h3 className="deconnecte">Déconnecté</h3>
      )}
      <button onClick={() => setConnecte(!connecte)}>
        Changer l’état
      </button>
    </div>
  );
}

export default Connexion;