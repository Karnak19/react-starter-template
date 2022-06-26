import react from './react.png';
import vite from './vite.svg';

function App() {
  return (
    <main className="rsw-container">
      <div className="rsw-item">
        <img src={vite} alt="WCS logo" />
        <img src={react} alt="WCS logo" />
      </div>
      <div className="rsw-item">
        <p>Welcome to your fresh, lightweight, React App ! &#127752;</p>
      </div>
      <div className="rsw-item">
        <p>
          Start in the <code>App.tsx</code> component !
        </p>
      </div>
    </main>
  );
}

export default App;
