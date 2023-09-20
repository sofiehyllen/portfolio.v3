import Navigation from "../components/Navigation";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Home from "../sections/Home";
import Projects from "../sections/Projects";

export default function PageHome(){
    return(
        <section>
            <Navigation/>
            <Home/>
            <Projects/>
            <About/>
            <Contact/>
        </section>
    )
}