import { Link } from "react-router-dom";

export default function MobileFiles(){
    return(
        <section className="mobile-article">
            <div className="mobile-files subject-container">
                <div className="file-container">
                    <Link to = "/tanken" className="route-link">
                        <div className="folder-style"><img className="img-max" src="./src/assets/mappe.png" alt="MappeLink" /></div>
                    </Link>
                    <h3>Tanken</h3>
                </div>

                <div className="file-container">
                    <Link to = "/medova" className="route-link">
                        <div className="folder-style"><img className="img-max" src="./src/assets/mappe.png" alt="MappeLink" /></div>
                    </Link>
                    <h3>Medova</h3>
                </div>

                <div className="file-container">
                    <Link to = "/hamanns" className="route-link">
                        <div className="folder-style"><img className="img-max" src="./src/assets/mappe.png" alt="MappeLink" /></div>
                    </Link>
                    <h3>Hamanns</h3>
                </div>                
            </div>

            <div className="mobile-files subject-container">
                <div className="file-container">
                    <Link to = "/illustrations" className="route-link">
                        <div className="document-style"><img className="img-max" src="./src/assets/tekst.png" alt="FilLink" /></div>
                    </Link>
                    <h3>Illustrations</h3>
                </div>

                <div className="file-container">
                    <Link to = "/" className="route-link">
                        <div className="document-style"><img className="img-max" src="./src/assets/tekst.png" alt="FilLink" /></div>
                    </Link>
                    <h3>blank</h3>
                </div>              
            </div>
        </section>
    )
}


