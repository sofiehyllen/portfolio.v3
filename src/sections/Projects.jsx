
import { Link } from "react-router-dom";
import File from "../components/File";
import MobileFiles from "../components/MobileFiles";
import mappe from "/src/assets/mappe.png"
import tekst from "/src/assets/tekst.png"



export default function Projects() {
    return (
        <section className="article" id="projects">
            <h2>projects 02</h2>
            <div className="subject-container">
                <File className="folder-style" text="Tanken" src= {mappe} alt="Mappe" modalContent="PageTanken" />
                <File className="folder-style" text="Medova" src= {mappe} alt="Mappe" modalContent="PageMedova" />
                <File className="folder-style" text="Hamanns" src= {mappe} alt="Mappe" modalContent="PageHamanns" />
            </div>

            <div className="subject-container">
                <div className="file-container">
                    <Link to = "/illustrations" className="route-link">
                        <div className="document-style"><img className="img-max" src={tekst} alt="FilLink" /></div>
                    </Link>
                    <h3>Illustrations</h3>
                </div> 
                <div className="file-container">
                    <Link to = "/skills" className="route-link">
                        <div className="document-style"><img className="img-max" src={tekst} alt="FilLink" /></div>
                    </Link>
                    <h3>Skills</h3>
                </div>  
            </div>
            <div>
                <MobileFiles/>    
            </div>
        </section>
    )
}