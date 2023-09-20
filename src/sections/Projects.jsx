
import { Link } from "react-router-dom";
import File from "../components/File";
import MobileFiles from "../components/MobileFiles";


export default function Projects() {
    return (
        <section className="article" id="projects">
            <h2>projects 02</h2>

            <div className="subject-container">
                <File className="folder-style" text="Tanken" src="/src/assets/mappe.png" alt="Mappe" modalContent="PageTanken" />
                <File className="folder-style" text="Medova" src="/src/assets/mappe.png" alt="Mappe" modalContent="PageMedova" />
                <File className="folder-style" text="Hamanns" src="/src/assets/mappe.png" alt="Mappe" modalContent="PageHamanns" />
            </div>

            <div className=" subject-container">
                <div className="file-container">
                    <Link to = "/illustrations" className="route-link">
                        <div className="document-style"><img className="img-max" src="./src/assets/tekst.png" alt="FilLink" /></div>
                    </Link>
                    <h3>Illustrations</h3>
                </div>            
            </div>

            <div>
                <MobileFiles/>    
            </div>
            
        </section>
    )
}