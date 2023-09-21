import { Link } from "react-router-dom";
import illustrationNavn from "/src/assets/illustrationer.navn.png"
import illustrationMarble from "/src/assets/illustrationer.marble.png"
import illustrationMoon from "/src/assets/illustrationer.moon.png"
import illustrationDesktop from "/src/assets/illustrationer.marble.desktop.png"
import illustrationRamen from "/src/assets/ramen.gif"
import illustrationYakitori from "/src/assets/yakitori.gif"

export default function PageIllustrations(){
    return(
        <section id="page-illustrations">        
            <Link to ="/" className="route-link back-link">&#10094; BACK</Link>

            <div className="illustration-flex-container illustration-section">
                <h4>Marble illustrations:</h4>
                <div className="illustration-container">
                    <div  className="illustration-flex-container" >
                        <div><img className="img-max frame" src={illustrationNavn} alt="Illustration1" /></div>
                        <div><img className="img-max" src={illustrationMarble} alt="Illustration2" /></div>
                    </div>
                    <div  className="illustration-flex-container" >
                        <div><img className="img-max" src={illustrationMoon} alt="Illustration3" /></div>
                        <div><img className="img-max frame" src={illustrationDesktop} alt="Illustration4" /></div>
                    </div>
                </div>    
            </div>

            <div className="illustration-flex-container illustration-section">
                <h4>Infographics:</h4>
                <div className="illustration-flex-container">
                    <div><img className="img-max" src={illustrationRamen} alt="Illustration5" /></div>
                    <div><img className="img-max" src={illustrationYakitori} alt="Illustration5" /></div>
                </div>    
            </div>
        </section>
    )
}