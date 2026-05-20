import './Recherche.css';

function Recherche({ valeur, onChange, onSearch }) {
  return (
    <div className="recherche">
      <input
        type="text"
        className="recherche-input"
        placeholder="Rechercher une ligne (depart, arrivee)..."
        value={valeur}
        onChange={e => onChange(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter' && valeur !== "") {
            onSearch();
          }
        }}
      />
      <button
        className="recherche-effacer"
        onClick={() => onChange("")}
      >
        Effacer
      </button>
    </div>
  );
}

export default Recherche;