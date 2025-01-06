import './App.css';
import { Box, Link } from '@mui/material';
import * as rdd from 'react-device-detect';

function App() {
  const isMobileDevice = rdd.isMobile || rdd.isMacOs;
  return (
    <div className="App">
      <header className="App-header">
        { !isMobileDevice &&
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
        }
        { isMobileDevice && !rdd.isAndroid &&
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
        }
        { isMobileDevice && rdd.isAndroid &&
        <Box>
        <Link
            href="geo:49.4299976,7.7531357?q=49.4299976,7.7531357"
            target="_blank"
            underline="none"
            color="white"
            sx={{
              marginTop: '10px', // Abstand zwischen der Flagge und dem Link
              fontSize: '14px', // Schriftgröße des Links
            }}
          >
            Standort geo neu
          </Link>
        </Box>
        }
        { !isMobileDevice &&
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
        }
      </header>
    </div>
  );
}

export default App;
