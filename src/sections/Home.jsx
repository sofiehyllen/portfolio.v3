import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import hoved from "/src/assets/hoved.png"

export default function Home(){
    return(
        <section data-aos="fade-right" data-aos-duration="1000" id="home">
            <div>
                <div id="titlename">
                    <h1>S</h1>     
                    <div id="sofie-hoved">
                        <img className="img-max" src= {hoved} alt="Sofies hovede" />
                    </div>
                    <h1>FIE</h1>
                </div>
                <h1 data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000"  >HYLLEN</h1>   
            </div> 
            
            <div data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000" className="links">
                <a href="https://www.linkedin.com/in/sofie-fuglsang-hyllen-b98a6224a/" target="_blank">LINKEDIN</a>
                <a href="https://www.facebook.com/sofiefuglsang.hyllen/" target="_blank">FACEBOOK</a>
                <a href="mailto: sofiehyllen@hotmail.com" target="_blank">E-MAIL</a>
            </div>
        </section>
    )
}