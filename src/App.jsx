
import React from "react"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Home from "./sections/Home"
import Projects from "./sections/Projects"
import Navigation from "./components/Navigation"

function App() {
  return (

<div className="body">
    <div className="grid"></div>
    <nav>
        <Navigation/>
    </nav>

    <main>
        <Home id="home"/> 
        <Projects id="projects"/>
        <About id="about"/>
        <Contact id="contact"/>
    </main>

</div>
  )
}

export default App
