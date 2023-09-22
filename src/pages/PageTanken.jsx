import { Link } from "react-router-dom";
import Infobox from "../components/Infobox";
import tankenTote from "/src/assets/tanken.tote.jpg"
import tankenBeer from "/src/assets/tanken.beer.png"
import tankenIkoner1 from "/src/assets/tanken.ikonserie1.png"
import tankenIkoner2 from "/src/assets/tanken.ikonserie2.png"
import tankenForside from "/src/assets/tanken.forside.jpg"
import tankenFarvetema from "/src/assets/tanken.farvetema.png"
import tankenVisitkort from "/src/assets/tanken.visitkort.jpg"


export default function PageTanken(){
    return(
        <section className="modal-container">
            <Link to ="/" className="route-link back-link">&#10094; BACK</Link>

            <Infobox 
            title="Final exam 2. semester" 
            year="2023" 
            client="Tanken, Aarhus" 
            task="To design and develop a concept and an interactive digital prototype for a company or another external partner. 
            Furthermore, we had to argue how the concept creates value for both the customer and users" 
            service="Webdesign, website development, design, brand design, user research" 
            url="http://tanken.sofiehyllen.dk/" 
            git="https://github.com/KarolineLerche/TANKENAARHUS.git"/>
            
            <div className="gallery-container">
                <div className="gallery-flex-container">
                    <div><img className="img-max" src={tankenTote} alt="tanken1" /></div>
                    <div id="tanken2"><img className="img-max" src={tankenBeer} alt="tanken2" /></div>
                </div>
                <div>
                    <div><img className="img-max" src={tankenIkoner1} alt="tanken3" /></div>
                    <div><img className="img-max" src={tankenIkoner2} alt="tanken4" /></div>
                </div>
                <div className="gallery-flex-container" id="tanken5">
                    <div><img className="img-max" src={tankenForside} alt="tanken5" /></div>
                    <div><img className="img-max" src={tankenFarvetema} alt="tanken6" /></div>
                </div>
                <div>
                    <div><img className="img-max" src={tankenVisitkort} alt="tanken7" /></div>                    
                </div>
            </div>
        </section>
    )
}