import Splash from "./components/splash/Splash"
import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import About from "./components/about/About"
import Skills from "./components/skills/Skills"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu"
import "./app.scss"
import React, { useState, useEffect } from "react"

function App() {
  
  const [menuOpen,setMenuOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false)
    }, 3000)

    return () => clearTimeout(timeout)

  }, [showSplash])  
  
  return (
    <div className="app">

    {
      showSplash ? 
        <div className="splashContainer">
          <Splash />
        </div>:
        <div className="appContainer">
          <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <div className="sections">
          <Intro />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
          </div>
        </div>
    }
    </div>
  );
}

export default App;
