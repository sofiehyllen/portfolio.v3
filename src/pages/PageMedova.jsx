import { Link } from "react-router-dom";
import Infobox from "../components/Infobox";

export default function PageMedova(){
      
    return(
        <section className="modal-container">
            <Link to ="/" className="route-link back-link">&#10094; BACK</Link>

            <Infobox 
            title="Final exam 1. semester" 
            year="2022" 
            client="Medova (Fictional assignment)" 
            task="To rebrand and redesign an already existing brand and create a responsive website that functions as an information and experience site for that specific brand. 
            In addition to this we had to create various content based on the audience's needs regarding the chosen product." 
            service="Webdesign, website development, viual identity, rebranding, design identity, user research" 
            url="http://medova.sofiehyllen.dk/"
            git="(____)"/>
            
            <div className="gallery-container">
                <div className="gallery-flex-container">
                    <div><img className="img-max" src="./src/assets/medova.tepose.original.png" alt="medova1"/></div>
                    <div><img className="img-max" src="./src/assets/medova.tepose.godnat.png" alt="medova2"/></div>
                    <div><img className="img-max" src="./src/assets/medova.tepose.original.png" alt="medova3"/></div>
                    <div><img className="img-max" src="./src/assets/medova.tepose.godnat.png" alt="medova4"/></div>
                </div>
                <div>
                    <div><img className="img-max" src="./src/assets/medova.pose.jpg" alt="medova5"/></div>
                </div>
                <div className="gallery-flex-container">
                    <div><img className="img-max" src="./src/assets/medova.tekop.jpg" alt="medova6"/></div>
                    <div><img className="img-max" src="./src/assets/medova.julekugle.jpg" alt="medova7"/></div>
                </div>
                <div className="gallery-flex-container" >
                    <div><img className="img-max" src="./src/assets/medova.mærkater.jpg" alt="medova6"/></div>
                    <div id="medova7"><img className="img-max" src="./src/assets/medova.farvetema.png" alt="medova7"/></div>
                </div>
                <div>
                    <div><img className="img-max" src="./src/assets/medova.baggrund.jpg" alt="medova8"/></div>
                </div>
            </div>
        </section>
    )
}