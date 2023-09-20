import Navigation from "../components/Navigation";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Home from "../sections/Home";
import Projects from "../sections/Projects";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

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