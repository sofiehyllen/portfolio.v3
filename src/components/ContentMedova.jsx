
import Infobox from "./Infobox";

export default function ContentMedova(){
      
    return(
        <section className="modal-container">
            <Infobox 
            title="1. semesters eksamen" 
            year="2022" 
            client="Medova (Fictional assignment)" 
            task="To rebrand and redesign Medova and design and code a website" 
            service="Webdesign, viual identity, rebranding etc." 
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