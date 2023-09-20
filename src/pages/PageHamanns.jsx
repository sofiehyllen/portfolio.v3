import { Link } from "react-router-dom";
import Infobox from "../components/Infobox";

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
            git="(____)"/>
            
            <div className="gallery-container">
                <div className="gallery-flex-container"  >
                    <div id="hamanns1"><img className="img-max" src="./src/assets/hamanns.web.png" alt="hamanns1" /></div>
                    <div><img className="img-max" src="./src/assets/hamanns.mad.jpg" alt="hamanns2" /></div>
                </div>
                <div>
                    <div><img className="img-max" src="./src/assets/hamanns.kop.jpg" alt="hamanns3" /></div>
                </div>
                <div className="gallery-flex-container" id="hamanns4">
                    <div><img className="img-max" src="./src/assets/hamanns.rund1.png" alt="hamanns4" /></div>
                    <div><img className="img-max" src="./src/assets/hamanns.logo.png" alt="hamanns5" /></div>
                    <div><img className="img-max" src="./src/assets/hamanns.rund2.png" alt="hamanns6" /></div>
                </div>
                <div>
                    <div><img className="img-max" src="./src/assets/hamanns.menu.png" alt="hamanns7" /></div>
                </div>
            </div>
        </section>
    )
}