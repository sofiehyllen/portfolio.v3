import { useNavigate } from "react-router-dom";
import illustrationNavn from "/src/assets/illustrationer.navn.png"
import illustrationMarble from "/src/assets/illustrationer.marble.png"
import illustrationMoon from "/src/assets/illustrationer.moon.png"
import illustrationDesktop from "/src/assets/illustrationer.marble.desktop.png"
import illustrationRamen from "/src/assets/ramen.gif"
import illustrationYakitori from "/src/assets/yakitori.gif"
import medovaTekop from "/src/assets/medova.tekop.jpg"
import medovaJulekugle from "/src/assets/medova.julekugle.jpg"
import medovaPlante from "/src/assets/medova.plante.jpg"



export default function PageIllustrations(){

    const navigate = useNavigate();

    return(
        <section className="document" id="page-illustrations">  
            <button onClick={() => navigate(-1)} className="route-link back-button">&#10094; BACK</button>

            <div className="illustration-flex-container illustration-section">
                <h4>Infographics:</h4>
                <div className="illustration-flex-container">
                    <div><img className="img-max" src={illustrationRamen} alt="Illustration5" /></div>
                    <div><img className="img-max" src={illustrationYakitori} alt="Illustration6" /></div>
                </div>    
            </div>   

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
            <h4>Watercolour:</h4>
                <div className="illustration-container">
                    <div  className="illustration-flex-container" >
                        <div><img className="img-max frame" src={medovaTekop} alt="Illustration7" /></div>
                        <div id="illustration8"><img className="img-max frame" src={medovaJulekugle} alt="Illustration8" /></div>                     
                    </div>
                    <div className="illustration-flex-container" >
                        <div><img className="img-max" src={medovaPlante} alt="Illustration8" /></div>                    
                    </div>
                </div>    
            </div>


        </section>
    )
}