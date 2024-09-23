import Navbar from './components/Navbar';
import Main from './components/Main';
import { useState } from 'react';
import { useEffect } from 'react';

function App () {

    const [darkMode, setDarkMode] = useState(true)

    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }

    useEffect(() => {
        document.body.className = darkMode ? 'dark' : '';
    }, [darkMode]);

    return (
        <div >
          <Navbar 
              darkMode={darkMode} 
              toggleDarkMode={toggleDarkMode} 
          />
          <Main 
              darkMode={darkMode} 
          />
          </div>
    )
}

export default App;