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
                        <div><img className="img-max" src="./src/assets/illustrationer.marble.png" alt="Illustration2" /></div>
                    </div>
                    <div  className="illustration-flex-container" >
                        <div><img className="img-max" src="./src/assets/illustrationer.moon.png" alt="Illustration3" /></div>
                        <div><img className="img-max frame" src="./src/assets/illustrationer.marble.desktop.png" alt="Illustration4" /></div>
                    </div>
                </div>    
            </div>

            <div className="illustration-flex-container illustration-section">
                <h4>Infographics:</h4>
                <div className="illustration-flex-container">
                    <div><img className="img-max" src="./src/assets/ramen.gif" alt="Illustration5" /></div>
                    <div><img className="img-max" src="./src/assets/yakitori.gif" alt="Illustration5" /></div>
                </div>    
            </div>
        </section>
    )
}