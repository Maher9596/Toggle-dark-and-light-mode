import React, { useState } from 'react'
import './App.css';
import Navbar from "./components/Navbar"
import Main from "./components/Main"

function App() {
  const[mode, setMode] = useState("dark")

  const toggleDarkMode = () => {
    setMode(prev => !prev)
  }

  return (
  <div className="container">
    <Navbar darkMode={mode} toggleDarkMode={toggleDarkMode} />
    <Main darkMode={mode} />
  </div>
  );
}

export default App;
