
import { useState, useEffect } from 'react';
import './App.css';
import './components/darkmode.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';

//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  }
  useEffect(() => {
    localStorage.setItem('mode', mode);
    document.body.className = mode;
  }, [mode]);

  return (
    <>
      {/*<Router>*/}
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <div className={`container my-3 ${mode}`}>
          {/*<Routes>*/}
            {/*<Route path="/about" element={<About mode={mode} toggleMode={toggleMode}/>} />*/}
            {/*<TextForm heading="Enter text to analyse" mode={mode} />*/} 
  {<TextForm heading="Enter text to analyse" mode={mode} />} 
          {/*</Routes>*/}
        </div>
{/*</Router>*/}
</>
  );
}

export default App;
