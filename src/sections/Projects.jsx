

import File from "../components/File";
import MobileFiles from "../components/MobileFiles";


export default function Projects() {
    return (
        <section className="article" id="projects">
            <h2>projects 02</h2>

            <div className="subject-container">
                <File className="folder-style" text="Tanken" src="/src/assets/mappe.png" alt="Mappe" modalContent="ContentTanken" />
                <File className="folder-style" text="Medova" src="/src/assets/mappe.png" alt="Mappe" modalContent="ContentMedova" />
                <File className="folder-style" text="Hamanns" src="/src/assets/mappe.png" alt="Mappe" modalContent="ContentHamanns" />
            </div>

            <div className="subject-container" >
                <File className="document-style" text="(blank)" src="/src/assets/tekst.png" alt="Tekst" />
                <File className="document-style" text="(blank)" src="/src/assets/tekst.png" alt="Tekst" />
            </div>

            <div >
                <MobileFiles/>    
            </div>
            
        </section>
    )
}