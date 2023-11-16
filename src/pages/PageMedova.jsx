import { useNavigate } from "react-router-dom";
import Infobox from "../components/Infobox";
import medovaOriginal from "/src/assets/medova.tepose.original.png"
import medovaGodnat from "/src/assets/medova.tepose.godnat.png"
import medovaPose from "/src/assets/medova.pose.jpg"
import medovaTekop from "/src/assets/medova.tekop.jpg"
import medovaJulekugle from "/src/assets/medova.julekugle.jpg"
import medovaManilla from "/src/assets/medova.mærkater.jpg"
import medovaFarvetema from "/src/assets/medova.farvetema.png"
import medovaBaggrund from "/src/assets/medova.baggrund.jpg"


export default function PageMedova(){
    const navigate = useNavigate();

    return(
        <section className="modal-container">
            <button onClick={() => navigate(-1)} className="route-link back-button">&#10094; BACK</button>

            <Infobox 
            title="Final exam 1. semester" 
            year="2022" 
            client="Medova (Fictional assignment)" 
            task="To rebrand and redesign an already existing brand and create a responsive website that functions as an information and experience site for that specific brand. 
            In addition to this we had to create various content based on the audience's needs regarding the chosen product." 
            service="Webdesign, website development, viual identity, rebranding, design identity, user research" 
            url="http://medova.sofiehyllen.dk/"
            git="https://github.com/sofiehyllen/medova.git"/>
            
            <div className="gallery-container">
                <div className="gallery-flex-container">
                    <div><img className="img-max" src={medovaOriginal} alt="medova1"/></div>
                    <div><img className="img-max" src={medovaGodnat} alt="medova2"/></div>
                    <div><img className="img-max" src={medovaOriginal} alt="medova3"/></div>
                    <div><img className="img-max" src={medovaGodnat} alt="medova4"/></div>
                </div>
                <div>
                    <div><img className="img-max" src={medovaPose} alt="medova5"/></div>
                </div>
                <div className="gallery-flex-container">
                    <div><img className="img-max" src={medovaTekop} alt="medova6"/></div>
                    <div><img className="img-max" src={medovaJulekugle} alt="medova7"/></div>
                </div>
                <div className="gallery-flex-container" >
                    <div><img className="img-max" src={medovaManilla} alt="medova6"/></div>
                    <div id="medova7"><img className="img-max" src={medovaFarvetema} alt="medova7"/></div>
                </div>
                <div>
                    <div><img className="img-max" src={medovaBaggrund} alt="medova8"/></div>
                </div>
            </div>
        </section>
    )
}