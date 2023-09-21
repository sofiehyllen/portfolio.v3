import { Link } from "react-router-dom";
import mappe from "/src/assets/mappe.png"

export default function MobileFiles(){
    return(
        <section className="mobile-article">
            <div className="mobile-files subject-container">
                <div className="file-container">
                    <Link to = "/tanken" className="route-link">
                        <div className="folder-style"><img className="img-max" src={mappe} alt="MappeLink" /></div>
                    </Link>
                    <h3>Tanken</h3>
                </div>

                <div className="file-container">
                    <Link to = "/medova" className="route-link">
                        <div className="folder-style"><img className="img-max" src={mappe} alt="MappeLink" /></div>
                    </Link>
                    <h3>Medova</h3>
                </div>

                <div className="file-container">
                    <Link to = "/hamanns" className="route-link">
                        <div className="folder-style"><img className="img-max" src={mappe} alt="MappeLink" /></div>
                    </Link>
                    <h3>Hamanns</h3>
                </div>                
            </div>
        </section>
    )
}


