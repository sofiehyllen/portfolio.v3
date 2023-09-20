import { Link } from "react-router-dom";

export default function MobileFiles(){
    return(
        <section>
            <div className="mobile-files subject-container">
                <div>
                    <Link to = "/tanken" className="route-link"><img className="img-max" src="./src/assets/mappe.png" alt="MappeLink" /></Link>
                    <h3>Tanken</h3>
                </div>

                <div>
                    <Link to = "/medova" className="route-link"><img className="img-max" src="./src/assets/mappe.png" alt="MappeLink" /></Link>
                    <h3>Medova</h3>
                </div>

                <div>
                    <Link to = "/hamanns" className="route-link"><img className="img-max" src="./src/assets/mappe.png" alt="MappeLink" /></Link>
                    <h3>Hamanns</h3>
                </div>                
            </div>

            <div className="mobile-files subject-comtainer">
                <div>
                    <Link to = "/" className="route-link"><img className="img-max" src="./src/assets/fil.png" alt="FilLink" /></Link>
                    <h3>blank</h3>
                </div>

                <div>
                    <Link to = "/" className="route-link"><img className="img-max" src="./src/assets/fil.png" alt="FilLink" /></Link>
                    <h3>blank</h3>
                </div>              
            </div>
        </section>
    )
}


