import { Link } from "react-router-dom";
import Infobox from "../components/Infobox";
import hamannsWebshop from "/src/assets/hamanns.web.png"
import hamannsMad from "/src/assets/hamanns.mad.jpg"
import hamannsKop from "/src/assets/hamanns.kop.jpg"
import hamannsRund1 from "/src/assets/hamanns.rund1.png"
import hamannsLogo from "/src/assets/hamanns.logo.png"
import hammansRund2 from "/src/assets/hamanns.rund2.png"
import hamannsMenu from "/src/assets/hamanns.menu.png"

export default function PageHamanns(){

    return(
        <section className="modal-container">
            <Link to ="/" className="route-link back-link">&#10094; BACK</Link>

            <Infobox 
            title="Mobile First Project" 
            year="2022" 
            client="Hamanns, Emma" 
            task="To design and develop a website that explores the Mobile First paradigm and Responsive Web Design strategy." 
            service="Webdesign, website development, responsive web design, user research, design, design identity" 
            url="http://hamanns.sofiehyllen.dk/"
            git="https://github.com/sofiehyllen/hamanns.git"/>
            
            <div className="gallery-container">
                <div className="gallery-flex-container"  >
                    <div id="hamanns1"><img className="img-max" src={hamannsWebshop} alt="hamanns1" /></div>
                    <div><img className="img-max" src={hamannsMad} alt="hamanns2" /></div>
                </div>
                <div>
                    <div><img className="img-max" src={hamannsKop} alt="hamanns3" /></div>
                </div>
                <div className="gallery-flex-container" id="hamanns4">
                    <div><img className="img-max" src={hamannsRund1} alt="hamanns4" /></div>
                    <div><img className="img-max" src={hamannsLogo} alt="hamanns5" /></div>
                    <div><img className="img-max" src={hammansRund2} alt="hamanns6" /></div>
                </div>
                <div>
                    <div><img className="img-max" src={hamannsMenu} alt="hamanns7" /></div>
                </div>
            </div>
        </section>
    )
}