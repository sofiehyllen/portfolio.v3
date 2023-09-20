import { Link } from "react-router-dom";
import Infobox from "../components/Infobox";


export default function PageTanken(){
    return(
        <section className="modal-container">
            <Link to ="/" className="route-link back-link">&#10094; BACK</Link>

            <Infobox 
            title="2. semesters eksamen" 
            year="2023" 
            client="Tanken Aarhus" 
            task="To design and code a website" 
            service="Webdesign, etc." 
            url="http://tanken.sofiehyllen.dk/" 
            git="(____)"/>
            
            <div className="gallery-container">
                <div className="gallery-flex-container">
                    <div><img className="img-max" src="./src/assets/tanken.tote.jpg" alt="tanken1" /></div>
                    <div id="tanken2"><img className="img-max" src="./src/assets/tanken.beer.png" alt="tanken2" /></div>
                </div>
                <div>
                    <div><img className="img-max" src="./src/assets/tanken.ikonserie1.png" alt="tanken3" /></div>
                    <div><img className="img-max" src="./src/assets/tanken.ikonserie2.png" alt="tanken4" /></div>
                </div>
                <div className="gallery-flex-container" id="tanken5">
                    <div><img className="img-max" src="./src/assets/tanken.forside.jpg" alt="tanken5" /></div>
                    <div><img className="img-max" src="./src/assets/tanken.farvetema.png" alt="tanken6" /></div>
                </div>
                <div>
                    <div><img className="img-max" src="./src/assets/tanken.visitkort.jpg" alt="tanken7" /></div>                    
                </div>
            </div>
        </section>
    )
}