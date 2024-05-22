import { Link } from 'react-router-dom';

// Komponent i marr nga daisyUI.com i stilizuar dhe pershtatur per funksionalitetin e nevojshem
function Tabel() {
  return (
    <div className="mockup-code mt-20 h-60 w-full max-w-3xl bg-slate-300 p-4 text-lg text-emerald-950 shadow-2xl shadow-slate-700">
      <pre data-prefix="1">
        <Link to="/category/dogs">
          <code>Dogs</code>
        </Link>
      </pre>
      <pre data-prefix="2">
        <Link to="/category/cats">
          <code>Cats</code>
        </Link>
      </pre>
      <pre data-prefix="3">
        <Link to="/category/birds">
          <code>Birds</code>
        </Link>
      </pre>
      <pre data-prefix="4" className="bg-emerald-600/60 text-warning-content">
        <code>Pet Expo</code>
      </pre>
      <pre data-prefix="5">
        <code>...</code>
      </pre>
    </div>
  );
}

export default Tabel;
