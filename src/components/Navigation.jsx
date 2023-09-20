import { useState } from "react"

export default function Navigation(){
    const [isOpen, setIsOpen] = useState(false);

    const responsiveNav= () => {
        setIsOpen(!isOpen)
    }

    const closeNav = () => {
        setIsOpen(false); // Luk navigationen
    };
    return(
        <div className="nav-container">
            <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#home" onClick={closeNav}>Home 01</a></li>
                    <li><a href="#projects" onClick={closeNav}>Projects 02</a></li>
                    <li><a href="#about" onClick={closeNav}>About 03</a></li>
                    <li><a href="#contact" onClick={closeNav}>Contact 04</a></li>
                </ul>
            </nav>

            <button onClick={responsiveNav} className={`responsive-button ${isOpen ? 'active' : ''}`}> 
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </button>            
        </div>
    )
}