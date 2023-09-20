import { Link } from "react-router-dom";


export default function PageIllustrations(){
    return(
        <section>        
            <Link to ="/" className="route-link back-link">&#10094; BACK</Link>

            <div className="illustration-flex-container illustration-section">
                <h4>Marble illustrations:</h4>
                <div className="illustration-container">
                    <div  className="illustration-flex-container" >
                        <div><img className="img-max frame" src="./src/assets/illustrationer.navn.png" alt="Illustration1" /></div>
                        <div id="illustration2"><img className="img-max" src="./src/assets/illustrationer.marble.png" alt="Illustration4" /></div>
                    </div>
                    <div  className="illustration-flex-container" >
                        <div id="illustration3" ><img className="img-max" src="./src/assets/illustrationer.moon.png" alt="Illustration2" /></div>
                        <div><img className="img-max frame" src="./src/assets/illustrationer.marble.desktop.png" alt="Illustration3" /></div>
                    </div>
                </div>    
            </div>

            <div className="illustration-flex-container illustration-section">
                <h4>Infographics:</h4>
                <div className="illustration-flex-container">
                    <div><img className="img-max" src="./src/assets/illustrationer.ramen.png" alt="Illustration3" /></div>
                </div>    
            </div>
        </section>
    )
}