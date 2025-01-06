import thumbsUp from './assets/images/thumbsUp.jpg';
import './App.css';
import { Box, Link } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box>
        <Link
            href="https://www.openstreetmap.org/?mlat=49.4299976&mlon=7.7531357&zoom=30"
            target="_blank"
            underline="none"
            color="white"
            sx={{
              marginTop: '10px', // Abstand zwischen der Flagge und dem Link
              fontSize: '14px', // Schriftgröße des Links
            }}
          >
            Standort OpenStreet
          </Link>
        </Box>
        <Box>
        <Link
            href="maps://?q=49.4299976,7.7531357"
            target="_blank"
            underline="none"
            color="white"
            sx={{
              marginTop: '10px', // Abstand zwischen der Flagge und dem Link
              fontSize: '14px', // Schriftgröße des Links
            }}
          >
            Standort maps
          </Link>
        </Box>
        <Box>
        <Link
            href="geo:49.4299976,7.7531357"
            target="_blank"
            underline="none"
            color="white"
            sx={{
              marginTop: '10px', // Abstand zwischen der Flagge und dem Link
              fontSize: '14px', // Schriftgröße des Links
            }}
          >
            Standort geo
          </Link>
        </Box>
        <Box>
        <Link
            href="https://www.google.com/maps?q=49.4299976,7.7531357"
            target="_blank"
            underline="none"
            color="white"
            sx={{
              marginTop: '10px', // Abstand zwischen der Flagge und dem Link
              fontSize: '14px', // Schriftgröße des Links
            }}
          >
            Standort GoogleMaps
          </Link>
        </Box>
      </header>
    </div>
  );
}

export default App;
