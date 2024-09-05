import thumbsUp from './assets/images/thumbsUp.jpg';
import './App.css';
import { Box } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box
          component="img"
          src={thumbsUp}
          alt="Die Daumen hoch!"
          sx={{
            width: '300px',  // Breite des Bildes
            height: 'auto',  // Höhe automatisch anpassen, um das Seitenverhältnis beizubehalten
            maxWidth: '100%', // Bildgröße auf die Containergröße beschränken
            pb: '30px'
          }}
        />
        <a
          className="App-link"
          href="https://de.wikipedia.org/wiki/Sorben"
          target="_blank"
          rel="noopener noreferrer"
        >
          Das sind die Sorben.
        </a>
        <Box
          sx={{
            display: 'flex',       // Verwenden von Flexbox
            justifyContent: 'center', // Zentriert horizontal
            alignItems: 'center',  // Zentriert vertikal
            width: '200px',        // Breite der Box
            height: '200px',       // Höhe der Box
            overflow: 'hidden',    // Verhindert, dass das Bild außerhalb der Box angezeigt wird
          }}
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Sorbs.svg/1920px-Flag_of_Sorbs.svg.png" 
            alt="Flagge der Sorben" 
            style={{
              width: '100%',       // Bildgröße auf die Box-Größe anpassen
              height: 'auto',     // Höhe automatisch anpassen, um das Seitenverhältnis beizubehalten
            }}
            />
        </Box>
      </header>
    </div>
  );
}

export default App;
